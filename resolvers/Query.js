const Query = {
  hello: (parent, args, context) => "World!!!",
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { products, categories }) => {
    return categories.find((category) => category.id === id);
  },
};

module.exports = Query;
