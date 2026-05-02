import prisma from "../lib/prisma.js";

export const createSurvey = async (req, res) => {
    try{
        const { title, description, questions } = req.body;
        const survey = await prisma.survey.create({
            data: { title, description, questions },
        });
    return res.status(200).json({ message: "Survey created successfully", survey });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllSurveys = async (req, res) => {
    try{
        const surveys = await prisma.survey.findMany();
        return res.status(200).json({ surveys });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getSurveyById = async (req, res) => {
    try{
        const { id } = req.params;
        const survey = await prisma.survey.findUnique({
            where: { id },
        });
        return res.status(200).json({ survey });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const updateSurvey = async (req, res) => {
    try{
        const { id } = req.params;
        const { title, description, questions } = req.body; 
        const survey = await prisma.survey.update({
                where: { id },
                data: { title, description, questions },
            });
        return res.status(200).json({ message: "Survey updated successfully", survey });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteSurvey = async (req, res) => {
    try{
        const { id } = req.params;
        const survey = await prisma.survey.delete({
            where: { id },
        });

        return res.status(200).json({ message: "Survey deleted successfully", survey });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
