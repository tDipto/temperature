const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
    res.render('index');
});

/* router.get("/about", (req, res) => {
    res.render('about')
}); */

router.get("/weather", (req, res) => {
    res.render('weather')
});

router.get("*", (req, res) => {
    res.render("404error" ,{
        errorMsg: "Oops ! Page not found"
    });
});

module.exports = router;