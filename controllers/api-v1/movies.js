require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { isValidObjectId } = require('mongoose')
const db = require('../../models')

const app = express();

// GET
app.get('/movies')




  