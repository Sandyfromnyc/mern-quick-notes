const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.get('/', ensureLoggedIn, notesCtrl.index);
router.post('/', ensureLoggedIn, notesCtrl.create);


module.exports = router;

