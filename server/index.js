require("dotenv").config();
const express = require("express")
const app = express();
const cors  = require("cors");

const router = require("./router/AuthRouter");
const connectDB = require("./utils/db");

const port = 3000;

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 ,// some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router);

connectDB().then( () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});

