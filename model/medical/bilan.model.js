import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attributSchema = new Schema({
  nom: String,
  norme: String,
  resultat: String,
});

const bilanSchema = new Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    medecin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medecin",
      required: true,
    },
    typeBilan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TypeBilan",
      required: true,
    },
    attributs: [attributSchema],
    commentaire: { type: String },
    hopital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hopital",
      required: true,
    },
    service: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Bilan ||
  mongoose.model("Bilan", bilanSchema, "bilans");
