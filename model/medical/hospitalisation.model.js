import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hospitalisationSchema = new Schema(
  {
    objet: {
      type: String,
      required: true,
      trim: true,
    },
    dateEntree: {
      type: Date,
      required: true,
    },
    dateFin: {
      type: Date,
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

export default mongoose.models.Hospitalisation ||
  mongoose.model("Hospitalisation", hospitalisationSchema, "hospitalisations");
