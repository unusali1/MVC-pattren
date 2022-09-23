const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

const PORT=3000;

app.use(express.urlencoded({extended: true}));
app.use(userRouter);


app.use((req, res)=>{
    res.status(404).json({message: 'resource not found'});
});

app.listen(PORT ,()=>{
    console.log(`Server listening on port http://localhost:${PORT}`);
});