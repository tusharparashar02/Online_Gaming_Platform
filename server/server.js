require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db");
const authRoute = require("./router/auth_router");
const contactRoute = require("./router/contact_router");
const router =require('./router/service-router.js');
const errorMiddleware = require('./middlewares/error_middleware');

const app = express();
const PORT =5000;

// Handling CORS policy issue //http://localhost:5000
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.get("/find",(req,res)=>{
    res.send("Hey u find me");
})
console.log("u r in")
app.use(cors(corsOptions));
app.use(express.json());
app.get("/find", (req, res) => {
    res.send("backend services");
});

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", router);
app.use(errorMiddleware);

// Connect to the database and start the server
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
}).catch(error => {
    console.error("Failed to connect to the database:", error);
});
