const express = require('express');
const { getUsers, postUsers } = require('../controlers/users.controler');
const router =express.Router();

router.get('/users',getUsers);
  
  router.post('/users',postUsers);

    module.exports =router;