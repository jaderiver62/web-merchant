const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags
    Tag.findAll({
            include: [{
                model: Product,
                through: ProductTag
            }]
        }).then(tagData => res.json(tagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    // Tag is associated to Product data
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    Tag.findOne({
            include: [{
                model: Product,
                through: ProductTag
            }],
            where: {
                id: req.params.id
            }
        }).then(tagData => res.json(tagData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    // Tag is associated to roduct data
});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body).then(tagData => res.json(tagData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(tagData => res.json(tagData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
    Tag.destroy({
            where: { id: req.params.id }
        }).then(tagData => res.json(tagData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
});

module.exports = router;