import Question from "../model/Question.js";

export const getAll = async (_req, res) => {
  try {
    const questions = await Question.find();

    res.json(questions);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

export const create = async (req, res) => {
  try {
    let question = new Question(req.body);
    question = await question.save();

    res.status(201).json(question);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

export const update = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if(!question) return res.status(404).json({ message: "La pregunta no existe" });

    res.json(question);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

export const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await Question.findByIdAndDelete(id);

    if(!question) return res.status(404).json({ message: "La pregunta no existe" });

    res.status(204).json();
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}
