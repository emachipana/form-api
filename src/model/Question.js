import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    options: {
      type: []
    },
    isRequired: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

questionSchema.methods.toJSON = function() {
  const { _id, ...company } = this.toObject();

  return { id: _id, ...company };
}

const Question = mongoose.model("Question", questionSchema);

export default Question;
