const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Welcome to user routes')
});


module.exports = router;