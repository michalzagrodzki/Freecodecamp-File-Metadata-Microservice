// upload file
exports.upload = async (req, res) => {
  try {
    const { originalname: name, mimetype: type, size: size } = req.file;
    const response = {
      name,
      type,
      size,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
