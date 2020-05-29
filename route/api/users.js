const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleweare/auth");

const { check, validationResult } = require("express-validator");

//import User Model
const User = require("../../models/User");

// @route Post api/users
// @desc   user-reg Rout
// @access public
router.post(
  "/",
  [
    //validaion using expres-validator
    check("firstname", "first Name is required").not().isEmpty(),
    check("email", "please include a valid email address").isEmail(),
    check(
      "password",
      "please enter a password of not less than 6 character "
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure the req.body object
    const { firstname, lastname, address, email, password } = req.body;
    try {
      //see is the user email exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist" }] });
      }

      //istance of user
      user = new User({
        firstname,
        lastname,
        address,
        email,
        password,
      });
      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

router.get("/mec", auth, async (req, res) => {
  try {
    const user = await User.findOne({ user: req.user.id });

    if (!user) {
      return res.status(500).json({ msg: "there is no detail for this user" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server Error");
  }
});

module.exports = router;
