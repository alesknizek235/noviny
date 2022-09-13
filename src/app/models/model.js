const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'clanky.json'));

exports.vypsatClanky = () => {
    let clanky = db.JSON();
    delete clanky['next_id'];
    return clanky;
}

exports.detail = (id) => {
    let data = db.JSON();
    let clanek = data[id];
    return clanek; 
}

exports.overeniHesla = (heslo) => {
    const {passwordControl} = require(path.join(__dirname,'..', '..', 'config'));
    return (heslo == passwordControl);
}

exports.pridatClanek = (autor, datum, nadpis, obsah) => {
    let id = db.get('next_id')

    db.set('next_id', id + 1);
        db.set(id, {
        "autor": autor,
        "datum": datum,
        "nadpis": nadpis,
        "obsah": obsah,
        "id":id,
    });
}

exports.dalsiId = () => {
    return db.JSON()['next_id'];
}