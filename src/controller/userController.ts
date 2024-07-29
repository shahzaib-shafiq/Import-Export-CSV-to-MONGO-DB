const importUser = async (req, res) => {
  try {
    res.send({ status: 400, sucess: true, msg: "Running" });
  } catch (error) {
    res.send({ status: 400, sucess: false, msg: "Error" });
  }
};

module.exports = {
  importUser,
};
