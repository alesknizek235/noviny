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

exports.detail = (request, response) =>{
    let id = request.params.id;
    let clanek = model.detail(id);

    if(clanek) {
        response.render('detail', {
            clanek, id
        });
    } else {
        response.redirect('/');
    }
}