const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.github.com';

/* Get api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all devs
router.get('/devs/:language', (req, res) => {
    // Get developers in Finland, using their programming language
    const lang=req.params.language;

    axios.get(`${API}/search/users?q=type:user+location:finland+language:${lang}`)
        .then(devs => {
            res.status(200).json(devs.data.items);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;