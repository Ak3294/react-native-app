const express = require("express");
const router = express.Router();
const User = require("../model/User");

let otps = {};

router.post("/send-otp", (req, res) => {
  try {
    const { phone } = req.body;
    console.log(phone);
    if (!phone || phone.length != 10) {
      return res.status(400).send({ message: "Invalid phone number" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
    otps[phone] = otp;

    console.log(`OTP for ${phone}: ${otp}`); // Simulate sending OTP
    res.status(200).send({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in /send-otp:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

router.post("/resend-otp", (req, res) => {
  try {
    const { phone } = req.body;
    console.log(phone);
    if (!phone || phone.length != 10) {
      return res.status(400).send({ message: "Invalid phone number" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit OTP
    otps[phone] = otp;

    console.log(`OTP for ${phone}: ${otp}`); // Simulate sending OTP
    res.status(200).send({ message: "OTP resent successfully" });
  } catch (error) {
    console.error("Error in /resend-otp:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Route: Validate OTP
router.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;
  if (otps[phone] || otps[phone] === parseInt(otp)) {
    delete otps[phone]; // Remove OTP after successful validation
    res.status(200).send({ message: "OTP validated successfully" });
  } else {
    res.status(400).send({ message: "Invalid OTP" });
  }
});

// Route: Submit Form
router.post("/submit-form", async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, landmark, region, state } =
      req.body;

      console.log(firstname,lastname,email, phoneNumber,landmark,region,state);

    if (
      !firstname ||
      !lastname ||
      !email ||
      !phoneNumber ||
      !landmark ||
      !region ||
      !state
    ) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const formData = new User({
      firstname,
      lastname,
      email,
      phoneNumber,
      landmark,
      region,
      state,
    });

    await formData.save();
    res.status(201).send({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send({ message: "Error saving form data" });
  }
});

module.exports = router;
