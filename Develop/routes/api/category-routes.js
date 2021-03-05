const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
        include: [Product]
    }).then(dbCategory => { res.json(dbCategory) });
    // be sure to include its associated Products

});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
        include: [Product]
    }).then(dbCategory => { res.json(dbCategory) });
    // be sure to include its associated Products
});

router.post('/', (req, res) => {
    // create a new category
    Category.create(req.body).then(dbCategory => { res.json(dbCategory) });
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbCategory => { res.json(dbCategory) });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.body.id
        }
    }).then(dbCategory => { res.json(dbCategory) });
});

module.exports = router;