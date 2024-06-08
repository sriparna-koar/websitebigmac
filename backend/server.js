const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://koarsk03:JTvt2AF8o8JuEN4H@eduwebsitebigmac.l6xnreu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Enquiry Schema and Model
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  enquiry: String,
  phone:Number,
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Contact API Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  try {
    await contact.save();
    res.status(201).send({ message: 'Message received' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving message', error });
  }
});

// Enquiry API Endpoint
app.post('/enquiry', async (req, res) => {
  const { name, email,phone, location, enquiry } = req.body;
  const newEnquiry = new Enquiry({ name, email,phone, location, enquiry });
  try {
    await newEnquiry.save();
    res.status(201).send({ message: 'Enquiry received' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving enquiry', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
