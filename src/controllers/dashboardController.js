const dashboardController = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Dashboard Route",
  });
};

module.exports = dashboardController;
