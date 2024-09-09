import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },
    questionId: {
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
