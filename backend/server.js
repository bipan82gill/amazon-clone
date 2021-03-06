import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    userUnifiedTopology: true,
    userCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req, res)=>{
    const productId = req.params.id;
    res.send(data.products.find(x=>x._id === productId));
    if(product)
        res.send(product);
        else
        res.status(404).send({ msg:"Product not Found."})

});

app.get("/api/products", (req, res)=>{
    res.send(data.products);
});

app.listen(5000, () => {console.log("http://localhost:5000")});