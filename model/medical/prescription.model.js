import mongoose from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema(
  {
    datePrescription: {
      type: Date,
      required: true,
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
    medicaments: [
      {
        medicament: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Medicament",
          required: true,
        },
        posologie: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Prescription ||
  mongoose.model("Prescription", prescriptionSchema, "prescriptions");
