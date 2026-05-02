import express from "express";
import { createSurvey, getAllSurveys, getSurveyById, updateSurvey, deleteSurvey } from "../controller/survey_controller.js";
const survey_router = express.Router();

survey_router.post("/create-survey", createSurvey);
survey_router.get("/get-all-surveys", getAllSurveys);
survey_router.get("/get-survey-by-id/:id", getSurveyById);
survey_router.put("/update-survey/:id", updateSurvey);
survey_router.delete("/delete-survey/:id", deleteSurvey);

export default survey_router;