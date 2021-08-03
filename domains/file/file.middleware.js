const is = {
  missingFile: (payload) => {
    if (!payload.file) return true;
  },
  emptyFile: (payload) => {
    if (
      payload.file.originalname === "" &&
      payload.file.mimetype === "" &&
      payload.file.size === 0
    )
      return true;
  },
};

const validate_file = {
  upload: function (req, res, next) {
    try {
      if (is.missingFile(req)) throw "Missing file";
      if (is.emptyFile(req)) throw "Empty file";

      next();
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};

exports.validate_file = validate_file;
