import mongoose from "mongoose";

const videoDBSchema = mongoose.Schema({
    videoUrl : String,
    videoDescription: String,
    songName: String,
    userName: String,
    likeCount: Number,
    shareCount: Number,
    commentCount: Number
});

export default mongoose.model("videos", videoDBSchema);