const Countries = require('../models/Countries')
const { updateUser } = require('./users')

const setVote = async (req, res, next) => {
  const { fase1, octavos, cuartos, semifinal, final } = req.body;
  const { user } = req;
  if (!fase1 || !octavos || !cuartos || !semifinal || !final) {
    throw new Error("incomplete data")
  }
  try {
    await updateUser(user);
    await savefases(fase1, "fase1");
    await savefases(octavos, "octavos");
    await savefases(cuartos, "cuartos");
    await savefases(semifinal, "semifinal");
    await savefases(final, "final");
    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

const savefases = async (fase, faseName) => {
  const records = await Countries.find().where('name').in(fase.position).populate(`${faseName}goals`).exec();
  for (let i = 0; i < records.length; i++) {
    records[i][`${faseName}goals`].done.push(goals[i][0])
    records[i][`${faseName}goals`].received.push(goals[i][1]);
    records[faseName] = true;
  }
  const records1Promises = records.map(record => record.save())
  await Promise.all(records1Promises);
}

const getStadistics = async (req, res, next) => {
  let { limit = 8 } = req.query
  try {
    const countries = await Countries.find().sort({ done: -1 }).limit(limit)
    // res.json(countries)
    res.json(require('./temp.json'));
  } catch (error) {
    return next(error);
  }
};

module.exports = { setVote, getStadistics };
