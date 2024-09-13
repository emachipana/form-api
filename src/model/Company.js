import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    ruc: {
      type: String
    },
    rSocial: {
      type: String,
      required: true
    },
    email: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

companySchema.methods.toJSON = function() {
  const { _id, ...company } = this.toObject();

  return { id: _id, ...company };
}

const Company = mongoose.model("Company", companySchema);

export default Company;
