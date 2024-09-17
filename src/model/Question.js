import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    options: {
      type: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const AutoIncrement = sequence(mongoose);
questionSchema.plugin(AutoIncrement, { inc_field: "position" });

questionSchema.methods.toJSON = function() {
  const { _id, ...company } = this.toObject();

  return { id: _id, ...company };
}

const Question = mongoose.model("Question", questionSchema);

export default Question;
