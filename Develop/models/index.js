const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// Defining the relationships between model classes


// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
// Using the category_id foreignKey for both of these so the objects are linked in the way we define them

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});
// Now the Tags and Products are related through the Product Key!

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};