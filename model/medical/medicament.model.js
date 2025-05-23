import mongoose from "mongoose";

const Schema = mongoose.Schema;

const medicamentSchema = new Schema(
  {
    nomMedicament: {
      type: String,
      required: true,
      trim: true,
    },
    categorie: {
      type: String,
      required: true,
      trim: true,
    },
    prescriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prescription",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Medicament ||
  mongoose.model("Medicament", medicamentSchema, "medicaments");
