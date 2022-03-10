const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Welcome to auth routes')
});


module.exports = router;