const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  ownerName: String,
  plateNumber: { type: String, required: true },
  carBrand: String,
});

mongoose.model("vehicleReg", vehicleSchema);
