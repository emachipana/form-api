import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    },
    answer: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

answerSchema.methods.toJSON = function() {
  const { _id, ...company } = this.toObject();

  return { id: _id, ...company };
}

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;
