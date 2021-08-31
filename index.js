const express= require("express");
const app= express();
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const userRoute= require("./routes/users")
const authRoute= require("./routes/auth")
const postRoute= require("./routes/posts")

dotenv.config();


//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(console.log("connected to MongoDB"));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(8000,()=>{
    console.log("Background server is running !");
})