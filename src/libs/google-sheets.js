import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SHEET_HEADERS = ["Fecha", "Nombre", "Email", "Telefono", "Mensaje"];

async function ensureSheetHeaders(sheet) {
  await sheet.loadHeaderRow();
  const hasHeaders =
    sheet.headerValues?.length > 0 &&
    sheet.headerValues.some((value) => value && String(value).trim() !== "");

  if (!hasHeaders) {
    await sheet.setHeaderRow(SHEET_HEADERS);
  }
}

function getAuth() {
  return new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function getLeads() {
  const auth = getAuth();
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await ensureSheetHeaders(sheet);
  const rows = await sheet.getRows();
  return rows.map((row) => ({
    fecha: row.get("Fecha") || "",
    nombre: row.get("Nombre") || "",
    email: row.get("Email") || "",
    telefono: row.get("Telefono") || "",
    mensaje: row.get("Mensaje") || "",
  }));
}

export async function addRowToSheet({ name, email, phone, message }) {
  const auth = getAuth();
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await ensureSheetHeaders(sheet);
  await sheet.addRow(
    {
      Fecha: new Date().toLocaleString("es-MX"),
      Nombre: name,
      Email: email,
      Telefono: phone || "",
      Mensaje: message,
    },
    { insert: true }
  );
}
