import Answer from "../model/Answer.js";
import Company from "../model/Company.js";

// GET
export const getAll = async (_req, res) => {
  try {
    let companies = await Company.find();
    const answers = await Answer.find();
    companies = companies.map(company => ({
      ...company.toJSON(),
      answers: answers.filter(answer => answer.companyId.equals(company._id))
    }));

    res.json(companies);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

// POST
export const create = async (req, res) => {
  try {
    let company = new Company(req.body);
    company = await company.save();

    res.status(201).json(company);
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}

// DELETE
export const destroy = async (req, res) => {
  const {id } = req.params;

  try {
    const company = await Company.findByIdAndDelete(id);

    if(!company) return res.status(404).json({ message: "La compañia no existe" });

    res.status(204).json();
  }catch(error) {
    console.error(error.message);

    res.status(500).json(error);
  }
}
