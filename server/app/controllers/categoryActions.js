// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browse = (req, res) => {
  if (req.query.q !== undefined) {
    const filteredPrograms = categories.filter((category) =>
      category.name.includes(req.query.q)
    );

    res.json(filteredPrograms);
  } else {
    res.json(categories);
  }
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const category = categories[parsedId - 1];
  res.json(category);
};

const getCategories = (req, res) => {
  res.json("coucou");
}

// Export them to import them somewhere else

module.exports = { browse , read, getCategories };