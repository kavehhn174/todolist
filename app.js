const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let tasks = ["Go Shopping", "Do Homework" , "Drink Coffee"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req,res) {
    let today = new Date();
    let options = {
        weekday: "long" , day: "numeric", month:"long"
    }
    let day = today.toLocaleDateString("en-US", options);
    res.render("home", {day: day, newTasksItems: tasks});

})

app.post("/", function (req,res) {
    const newTask = req.body.newTask;
    if (newTask !== "") {
        tasks.push(newTask);
        res.redirect('/')
    }
})

app.listen('3000', function () {
    console.log("Server started...")
})