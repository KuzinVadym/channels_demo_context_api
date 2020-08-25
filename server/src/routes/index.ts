import express from 'express';
import channels from './channels';

const router = express.Router();

// router.use('/channels', channels);
router.use('/channels', channels);

// router.get('/', function(req, res, next) {
//     console.log("Get From File Manager");
//     let data = {
//         service: "File Manager",
//         call: "Get",
//         time: new Date().getMilliseconds()
//     };
//     res.json(data);
// });

export default router;