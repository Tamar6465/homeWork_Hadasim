
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3604;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const employee = require('./routes/employee');
app.use("/employee", employee);
const vaccines=require('./routes/vaccines');
app.use("/vaccines",vaccines);
const sick=require('./routes/sick');
app.use("/sick",sick);
app.use(express.json());
app.use(express.static('images'));

app.listen(port, () => {
    console.log('server is up and running');
})