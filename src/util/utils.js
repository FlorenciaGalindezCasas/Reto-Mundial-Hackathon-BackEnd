const Countries = require('../models/Countries');
const teams = require('./teams')

const fillteams = async () => {
    const count = await Countries.estimatedDocumentCount();
    if (count === 0) await Countries.insertMany(teams);
}

module.exports = {
    fillteams
}