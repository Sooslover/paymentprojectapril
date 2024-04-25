import XLSX from 'xlsx';

export default function handler(req, res) {
  try {
    // Load an Excel file (path relative to the root of your project)
    const workbook = XLSX.readFile('public/assets/data/excelfile.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to read the excel file', error: error.toString() });
  }
}
