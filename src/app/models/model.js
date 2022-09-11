const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'clanky.json'));

exports.vypsatClanky = () => {
    let clanky = db.JSON();
    delete clanky['next_id'];
    return clanky;
}