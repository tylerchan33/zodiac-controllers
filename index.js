const express = require("express")

const app = express()

const PORT = 3000

const waterSigns = ["Pisces", "Cancer", "Scorpio"]
const airSigns = ["Aquarius", "Gemini", "Libra"]
const fireSigns = ["Aries", "Leo", "Sagittarius"]
const earthSigns = ["Taurus", "Virgo", "Capricorn"]
const waterTraits = ["private", "mysterious", "psychic", "charming", "emotional", "sensitive"]
const airTraits = ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
const fireTraits = ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
const earthTraits = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/water", (req, res) => {
    res.render("water", {signs: waterSigns, traits: waterTraits})
})

app.get("/air", (req, res) => {
    res.render("air", {signs: airSigns, traits: airTraits})
})

app.get("/fire", (req, res) => {
    res.render("fire", {signs: fireSigns, traits: fireTraits})
})

app.get("/earth", (req, res) => {
    res.render("earth", {signs: earthSigns, traits: earthTraits})
})


app.listen(3000, () => {
    console.log("server is up")
})