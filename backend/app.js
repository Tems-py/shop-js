const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const errorController = require("./controllers/error");

const app = express();
app.use(cors());

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use(errorController.get404);

app.listen(3001);
