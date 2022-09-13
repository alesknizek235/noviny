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

exports.redakce = (request, response) => {
    response.render('redakce');
}

exports.redakce_heslo = (request, response) => {
    response.render('redakce_heslo');
}

exports.kontrola = (request, response) => {
    let heslo = request.body.myInput;
    let odpoved = model.overeniHesla(heslo);
    if(odpoved){
        response.render('redakce');
    }else{
        response.render('spatneHeslo');
    }
}

exports.pridatClanek = (request, response) => {
    let nadpis = request.body.nadpis;
    let autor = request.body.autor;
    let obsah = request.body.obsah;
    let datum = new Date().toLocaleDateString()

    model.pridatClanek(autor, datum, nadpis, obsah);
    return response.render('redakce')
}