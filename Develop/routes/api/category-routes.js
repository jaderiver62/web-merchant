const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
            include: [Product]
        }).then(dbCategory => {
            res.json(dbCategory)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    // Category is associated to Products

});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
            where: { id: req.params.id },
            include: [Product]
        }).then(dbCategory => res.json(dbCategory))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });

    // Category is associated to Products
});

router.post('/', (req, res) => {
    // create a new category
    Category.create(req.body).then(dbCategory => res.json(dbCategory))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });

});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
            where: {
                id: req.params.id
            },
            include: [Product]
        }).then(dbCategory => res.json(dbCategory))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });

});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbCategory => res.json(dbCategory))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });

});

module.exports = router;