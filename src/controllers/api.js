const Countries = require('../models/Countries');
const { updateUser } = require('./users');

const setVote = async (req, res, next) => {
  const { fase1, octavos, cuartos, semifinal, final, email, campeon } = req.body;
  // if (!fase1 || !octavos || !cuartos || !semifinal || !final || !campeon) {
  //   throw new Error("incomplete data")
  // }
  try {
    await updateUser(email);
    await savefases({ fase1, octavos, cuartos, semifinal, final, campeon })
    res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
};

const savefases = async (fases) => {
  const keys = Object.keys(fases);
  for (const key of keys) {
    const records = await Countries.find().where('name').in(key.position).populate(key).exec();
    for (let i = 0; i < records.length; i++) {
      records[i][key].done.push(goals[i][0])
      records[i][key].received.push(goals[i][1]);
    }
  }
  const records1Promises = records.map(record => record.save())
  await Promise.all(records1Promises);
}

const getStadistics = async (req, res, next) => {
  try {
    
    res.json(require('./temp.json'));
  } catch (error) {
    return next(error);
  }
};

const getfases = async () => {
  const fases = ["fase1", "octavos", "cuartos", "semifinal", "final", "campeon"];
  for (const fase of fases) {
    const records = await Countries.find().populate(fase).sort({[[fase].done]: -1}).exec();
    
  }
};

module.exports = { setVote, getStadistics };
