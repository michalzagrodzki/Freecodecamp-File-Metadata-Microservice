// upload file
exports.upload = async (req, res) => {
  try {
    const response = {
      name: "",
      type: "",
      size: "",
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};
