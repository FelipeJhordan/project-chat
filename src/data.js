const fs  = require('fs');
const { response } = require('express');
const { exception } = require('console');
const { isArray } = require('jquery');

const PATHFILE = './log/log.json';
// função que lê o arquivo json 
  function getJson() {
      const response = fs.readFileSync(PATHFILE, 'utf8');
      if (response != undefined) return response;
      else if (response === '') response = new Array();
      else throw new exception("Erro");
}

function setJson(messages) {
    jsonMessages = JSON.stringify(messages);
    fs.writeFileSync(PATHFILE, jsonMessages);
}
// função que adicona a mensagem ao array json
function appendJson(obj) {
    jsonConverted = JSON.parse(getJson());
    jsonConverted.push(obj);
    setJson(jsonConverted);
}

function setFileStart(){
    fs.writeFileSync(PATHFILE, '[ ]');
}

module.exports = {
    getJson,
    appendJson,
    setFileStart
}

