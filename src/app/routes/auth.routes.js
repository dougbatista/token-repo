const express = require('express');
const router = express.Router();

const { generateToken, tokenVerify } = require('../controller/Auth.controller');

router.get('/obter/token/v1/cliente/:id_cliente', generateToken);
router.post('/validar/token/v1/cliente/:id_cliente', tokenVerify);

module.exports = router;