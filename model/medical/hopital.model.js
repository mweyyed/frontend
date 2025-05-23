import mongoose from "mongoose";

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  responsable: {
    type: String,
    required: true,
    trim: true,
  },
  telephone: {
    type: String,
    set: (v) => (v === "" ? undefined : v),
    validate: {
      validator: function (value) {
        return !value || /^0[5-7]\d{8}$/.test(value);
      },
      message: "Numéro de téléphone invalide",
    },
  },
});

const hopitalSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    },
    adresse: {
      type: String,
      required: true,
      trim: true,
    },
    telephone: {
      type: String,
      required: true,
      set: (v) => (v === "" ? undefined : v),
      validate: {
        validator: function (value) {
          return !value || /^0[5-7]\d{8}$/.test(value);
        },
        message: "Numéro de téléphone invalide",
      },
    },
    services: [serviceSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Hopital ||
  mongoose.model("Hopital", hopitalSchema, "hopitaux");
