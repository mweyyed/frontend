import mongoose from "mongoose";

const Schema = mongoose.Schema;

const rendezVousSchema = new Schema(
  {
    objet: {
      type: String,
      required: true,
      trim: true,
    },
    consignes: {
      type: String,
      trim: true,
    },
    dateRdv: {
      type: Date,
      required: true,
      index: true,
    },
    dateEnvoi: {
      type: Date,
      default: Date.now,
    },
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

export default mongoose.models.RendezVous ||
  mongoose.model("RendezVous", rendezVousSchema, "rendezVous");
