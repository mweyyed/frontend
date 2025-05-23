import mongoose from "mongoose";

const Schema = mongoose.Schema;

const antecedentFamilialSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  relation: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "père",
      "mère",
      "frère",
      "sœur",
      "grand-père",
      "grand-mère",
      "oncle",
      "tante",
      "autre",
    ],
  },
  ageDetection: {
    type: Number,
    min: 0,
    max: 120,
  },
});

const antecedentChirurgicalSchema = new Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  date: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  compteRendu: {
    type: String,
    trim: true,
  },
  contenu: {
    type: String,
    trim: true,
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Operation",
  },
});

const antecedentMedicamenteuxSchema = new Schema({
  nomMedicament: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  categorie: {
    type: String,
    required: true,
    trim: true,
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medicament",
  },
});

const antecedentMedicalSchema = new Schema({
  nomMaladie: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  description: {
    type: String,
    trim: true,
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MaladieChronique",
  },
});

const antecedentSchema = new Schema(
  {
    antecedentFamilial: [antecedentFamilialSchema],
    antecedentChirurgical: [antecedentChirurgicalSchema],
    antecedentMedicamenteux: [antecedentMedicamenteuxSchema],
    antecedentMedical: [antecedentMedicalSchema],
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
      index: true,
    },
    medecin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medecin",
      required: true,
      index: true,
    },
    hopital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hopital",
      required: true,
      index: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

antecedentSchema.index({ patient: 1, medecin: 1 });
antecedentSchema.index({ patient: 1, hopital: 1 });

antecedentSchema.virtual("nombreTotalAntecedents").get(function () {
  return (
    this.antecedentFamilial.length +
    this.antecedentChirurgical.length +
    this.antecedentMedicamenteux.length +
    this.antecedentMedical.length
  );
});

antecedentSchema.pre("save", function (next) {
  if (
    !this.antecedentFamilial.length &&
    !this.antecedentChirurgical.length &&
    !this.antecedentMedicamenteux.length &&
    !this.antecedentMedical.length
  ) {
    next(new Error("Au moins un type d'antécédent est requis"));
  }
  next();
});

export default mongoose.models.Antecedent ||
  mongoose.model("Antecedent", antecedentSchema, "antecedents");
