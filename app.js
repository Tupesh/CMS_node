const { connectdatabase } = require("./database/database");

const app = require("express")();

//database connection
connectdatabase();

app.get("/", (req, res) => {
    res.json({
        this: "Is home page"
    })
})





app.listen(4000, () => {
    console.log("This is working");
})