const express = require("express");
const router = express.Router();

const {getPeople,
    createPerson,
    deletePerson,
    updatePerson} = require('../controllers/people');

// router.get('/',getPeople)

// router.post('/postman',createPerson)

// router.put('/:id',updatePerson)

// router.delete('/:id',deletePerson)

router.route('/').get(getPeople)
router.route('/postman').post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;