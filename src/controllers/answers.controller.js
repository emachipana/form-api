import Answer from "../model/Answer.js";
import Company from "../model/Company.js";
import Question from "../model/Question.js";

export const create = async (req, res) => {
  const { companyId, questionId } = req.body;

  try {
    const company = await Company.findById(companyId);
    if(!company) return res.status(404).json({ message: "La compañia no existe" });
    const question = await Question.findById(questionId);
    if(!question) return res.status(404).json({ message: "La pregunta no existe" });

    let answer = new Answer({ question: question, company: company, ...req.body });
    answer = await answer.save();

    res.status(201).json(answer);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

export const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const answer = await Answer.findByIdAndDelete(id);
    if(!answer) return res.status(404).json({ message: "La respuesta no existe" });

    res.status(204).json();
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}
