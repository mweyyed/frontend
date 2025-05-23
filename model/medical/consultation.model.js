// Modèle pour les consultations médicales
// Ce schéma définit la structure des consultations entre médecins et patients

import mongoose from "mongoose";
import { generateId, ID_PREFIXES } from "../../utils/idGenerator.js";

const Schema = mongoose.Schema;

const consultationSchema = new Schema(
  {
    consultationId: {
      type: String,
      unique: true,
      required: true,
      default: () => generateId(ID_PREFIXES.CONSULTATION),
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    medecin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medecin",
      required: true,
    },
    motif: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
    diagnostic: {
      type: String,
      required: true,
    },
    traitement: {
      type: String,
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

// Add a pre-save hook to ensure consultationId is generated if not provided
consultationSchema.pre("save", function (next) {
  if (!this.consultationId) {
    this.consultationId = generateId(ID_PREFIXES.CONSULTATION);
  }
  next();
});

const Consultation = mongoose.model(
  "Consultation",
  consultationSchema,
  "consultations"
);

export default Consultation;
