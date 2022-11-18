const setVote = async (req, res, next) => {
  const { position, goals } = req.body;
  try {
    res.json({voted: true})
  } catch (err) {
    return next(error);
  }
};

const getStadistics = async (req, res, next) => {
  try {
    res.json(require('./temp.json'));
  } catch (error) {
    return next(error);
  }
};

module.exports = { setVote, getStadistics };
