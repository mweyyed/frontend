import mongoose from "mongoose";

const Schema = mongoose.Schema;

const maladieChroniqueSchema = new Schema(
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
    nomMaladie: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.MaladieChronique ||
  mongoose.model(
    "MaladieChronique",
    maladieChroniqueSchema,
    "maladiesChroniques"
  );
