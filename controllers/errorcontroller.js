exports.get404 = (req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>"); // 404 code for Page not found.
  };