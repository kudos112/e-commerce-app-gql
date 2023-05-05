const Product = {
  category: (parent, args, { categories }) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};

module.exports = Product;
