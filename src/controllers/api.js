const Countries = require('../models/Countries')
const { updateUser } = require('./users')

const setVote = async (req, res, next) => {
  // const userdata = req.userdata;
  // const { position, goals } = req.body;
  // if (!position || position.length === 0 || !goals || goals.length === 0) {
  //   throw new Error("incomplete data")
  // }
  try {
    // await updateUser(userdata)
    // const records = await Countries.find().where('name').in(position).exec();
    // for (let i = 0; i < records.length; i++) {
    //   records[i].done.push(goals[i][0]) 
    //   records[i].received.push(goals[i][1]);
    // }
    // const recordsPromises = records.map(record => record.save())
    // await Promise.all(recordsPromises);
    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

const getStadistics = async (req, res, next) => {
  let { limit = 8 } = req.query
  try {
    // const countries = await Countries.find().sort({ done: -1 }).limit(limit)
    // res.json(countries)
    res.json(require('./temp.json'));
  } catch (error) {
    return next(error);
  }
};

module.exports = { setVote, getStadistics };
