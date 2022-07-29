const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
    res.render("home", {day: day});

})





app.listen('3000', function () {
    console.log("Server started...")
})