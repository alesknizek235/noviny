const path = require('path');

const model = require(path.join(__dirname, '..', 'models', 'model'));

exports.error = (request, response) => {
    response.render('error');
};

exports.mainpage = (request, response) => {
    let clanky = model.vypsatClanky();

    response.render('mainpage',{
        titulek: 'články',
        klient: 'clanky',
        clanky,
    }); 
}