var express = require('express');
var bodyParse = require('body-parser');
var logger = require('morgan');

var bcActionRouter = require('./routes/blockchain_action');

var app = express();

app.use(logger('dev'));
app.use(bodyParse.json());

/*
For each request app receive:

{
   "actions":[
      {
         "tx_id":"ccf64c04bb7bde8b66d0fe34aa0262f11289261650199e59ef58695e006b30a9",
         "account":"eosio.token",
         "name":"transfer",
         "authorization":[
            {
               "actor":"eosio",
               "permission":"active"
            }
         ],
         "action_data":{
            "from":"eosio",
            "to":"eosio.stake",
            "quantity":"490.0000 EOS",
            "memo":"stake bandwidth"
         }
      },
      {
         "tx_id":"ccf64c04bb7bde8b66d0fe34aa0262f11289261650199e59ef58695e006b30a9",
         "account":"eosio.token",
         "name":"transfer",
         "authorization":[
            {
               "actor":"eosio",
               "permission":"active"
            }
         ],
         "action_data":{
            "from":"eosio",
            "to":"eosio.ramfee",
            "quantity":"0.0005 EOS",
            "memo":"ram fee"
         }
      },
      {
         "tx_id":"ccf64c04bb7bde8b66d0fe34aa0262f11289261650199e59ef58695e006b30a9",
         "account":"eosio.token",
         "name":"transfer",
         "authorization":[
            {
               "actor":"eosio",
               "permission":"active"
            }
         ],
         "action_data":{
            "from":"eosio",
            "to":"eosio.ram",
            "quantity":"0.1187 EOS",
            "memo":"buy ram"
         }
      },
      {
         "tx_id":"8f12cb3251184db0b124f98541b5fcec7a2f90e4e8ff9f11481f3446b22c2a22",
         "account":"eosio.token",
         "name":"transfer",
         "authorization":[
            {
               "actor":"eosio",
               "permission":"active"
            }
         ],
         "action_data":{
            "from":"eosio",
            "to":"ge3tegenesis",
            "quantity":"10.0000 EOS",
            "memo":"test ERC20 Distribution"
         }
      }
   ]
}

 */

app.post('/bc-action', function(req, res, next) {

    req.body.actions.forEach((action) => {
        console.log("transaction: "+action.tx_id)
    });

    res.send({"result": "OK"});
});

module.exports = app;
