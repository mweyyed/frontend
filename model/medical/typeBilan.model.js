import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attributSchema = new Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  norme: {
    type: String,
    required: true,
    trim: true,
  },
});

const typeBilanSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    attributs: [attributSchema],
  },
  { timestamps: true }
);

export default mongoose.models.TypeBilan ||
  mongoose.model("TypeBilan", typeBilanSchema, "typesBilans");
