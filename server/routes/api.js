const express = require('express');
const router = express.Router();

/* Get api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;