const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req,res) {
    let today = new Date();

    res.render("home", {today: today});

})





app.listen('3000', function () {
    console.log("Server started...")
})