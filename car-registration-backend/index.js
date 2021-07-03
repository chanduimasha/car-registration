const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("./vehicle");

const Vehicles = mongoose.model("vehicleReg");

const PORT = 9000;

app.use(express.json());
app.use(cors());

const dbUri =
  "mongodb+srv://admin:NyJMqgR3R5FDxQN@cluster0.olgnk.mongodb.net/CarDetails?retryWrites=true&w=majority";

mongoose.connect(dbUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Db is connected");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/task/one", (req, res) => {});

app.post("/task/three/register", (req, res) => {
  console.log(req.body);
  const newVehicle = new Vehicles({
    ownerName: req.body.ownerName,
    plateNumber: req.body.plateNumber,
    carBrand: req.body.carBrand,
  });

  newVehicle
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/task/three/get/details", (req, res) => {
  Vehicles.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/task/three/get/details/one", (req, res) => {
  console.log(req.body.plateNumber);
  const plateNumber = req.body.plateNumber;

  Vehicles.findOne({ plateNumber: plateNumber }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/task/three/get/details/update", (req, res) => {
  const ownerName = req.body.ownerName;
  const plateNumber = req.body.plateNumber;
  const carBrand = req.body.carBrand;

  Vehicles.updateOne(
    { plateNumber: plateNumber },
    { ownerName: ownerName, carBrand: carBrand },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

app.post("/task/three/get/details/delete", (req, res) => {
  const plateNumber = req.body.plateNumber;

  Vehicles.deleteOne({ plateNumber: plateNumber }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log("server listening on " + PORT);
});
