const router = require('express').Router();

const channels = require('./channels');

router.use('/channels', channels);

module.exports = router;
