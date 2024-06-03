import { Router } from "express";
import studentController from "../../controller/student/index.js";
import userAuthMiddleWare from "../../middleware/index.js";
const studentRouter = Router();

studentRouter.get("/students",userAuthMiddleWare,studentController.getAll);
studentRouter.get("/student/:id",studentController.getOne);
studentRouter.post("/Createstudents",studentController.Create);
studentRouter.put("/updatedStudent/:id",studentController.Update);
studentRouter.delete("/deleteStudent/:id",studentController.Delete);

export default studentRouter;