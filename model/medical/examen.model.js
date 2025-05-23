import mongoose from "mongoose";

const Schema = mongoose.Schema;

const examenSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    compteRendu: {
      type: String,
      trim: true,
    },
    contenu: {
      type: String,
      trim: true,
    },
    documents: [
      {
        type: String,
        trim: true,
      },
    ],
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
    hopital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hopital",
      required: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Examen ||
  mongoose.model("Examen", examenSchema, "examens");
