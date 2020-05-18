const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/", async (req, res) => {
  try {
    const options = {
      uri: "https://covid9ja.herokuapp.com/api/confirmed",
      method: "Get",
      headers: { "user-agent": "node.js" },
    };
    request(options, (error, response, body) => {
      if (error) console.error(error);
      res.json(JSON.parse(body));
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
