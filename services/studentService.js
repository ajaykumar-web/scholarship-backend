const studentModel = require("../models/students_model");
const ExcelJS = require("exceljs");

class studentService {
  static async importStudentsFromExcel(filePath) {
    if (!filePath || typeof filePath !== "string") {
      throw new Error("Invalid file path");
    }

    const workbook = new ExcelJS.Workbook();

    try {
      await workbook.xlsx.readFile(filePath);

      const worksheet = workbook.getWorksheet(1);

      worksheet.eachRow({ includeEmpty: false }, async (row) => {
        const name = row.getCell(1).text;
        const email = row.getCell(2).text;
        const enrollmentDate = row.getCell(3).value;

        await studentModel.create({
          name,
          email,
          enrollmentDate,
        });
      });
    } catch (error) {
      console.error("Error importing student data:", error);
      throw error;
    }
  }
  getAllStundent = () => {
    const response = studentModel.find({});
    return response;
  };
}

module.exports = studentService;
