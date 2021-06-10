import mongoose from "mongoose";
import express from "express";
import videoDb from "./modals/videoDB.js";
import Cors from "cors";

//App config
const app = express(); 
const PORT = process.env.PORT || 9001;


//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
const connectionUrl = "mongodb+srv://admin:lWFLVsnx11fCNqiT@cluster0.hpozv.mongodb.net/tik-tok?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });


//Api endpoints

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
})

//endpoint to post the video
app.post("/v1/post", (req, res) => {
    const videos = req.body;

    videoDb.create(videos, (err, data) => {
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

//endpoint to get all videos
app.get("/v1/get", (req, res) => {
    videoDb.find((err, data) => {
        if(err)
        {
            res.status(501).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

//Listeners
app.listen(PORT, () => {
    console.log("listening on localhost port: " + PORT);
})