const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'controller'));

router.use('/main', require(path.join(__dirname, 'router')));

router.get([
    '/',
    '/index',
    'index.html',
    ], (dotaz, odpoved) => {
        odpoved.redirect('/main/mainpage');
    });

router.get('*', controller.error);

module.exports = router;
