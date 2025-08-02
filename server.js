const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public")); // Your html/image folder

app.get("/current-image", (req, res) => {
    const path = fs.readFileSync("current-image.txt", "utf-8");
    res.send({ imagePath: path });
});

app.post("/current-image", (req, res) => {
    fs.writeFileSync("current-image.txt", req.body.imagePath, "utf-8");
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
