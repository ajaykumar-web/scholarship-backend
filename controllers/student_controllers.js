const studentService = require("../services/studentService");
const studentServiceInstance = new studentService();

const addStudent = async (req, res) => {
  console.log(req);
  const filePath = req.file.path;
  console.log(filePath);
  try {
    await studentService.importStudentsFromExcel(filePath);
    res.status(200).json({ message: "Student data imported successfully." });
  } catch (error) {
    console.error("Error importing student data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStudent = async (req, res) => {
  try {
    const response = await studentServiceInstance.getAllStundent();
    res.status(200).json({
      response: response,
      message: "Student data fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { addStudent, getStudent };
