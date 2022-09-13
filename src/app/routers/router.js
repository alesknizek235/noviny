const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'controller'));

router.get("/mainpage", controller.mainpage);
router.get("/detail/:id", controller.detail);
router.get("/redakce_heslo", controller.redakce_heslo);
router.post("/overeniHesla", controller.kontrola);
router.post("/pridatClanek", controller.pridatClanek);


module.exports = router;