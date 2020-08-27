const express = require('express');
const path = require('path');
const DataLog = require('./src/data.js');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('index.html');
})
app.get('/getmessages', async (req, res) => {
    await res.send(messages)
})
app.get('/restart-all/:confirm', (req, res) => {
    if(req.params.confirm === 'true'){
         DataLog.setFileStart();
    }
      res.redirect('/');
});

function loadMessages(){
    return  DataLog.getJson();
}

var messages = loadMessages();

let msg = [];

io.on('connection', socket => {
    console.log(`Socket Conectado ${socket.id}`);

    socket.on('sendMessage', data => {
        msg.push(data);
        socket.broadcast.emit('receivedMessage', data )
        DataLog.appendJson(data);
        messages =loadMessages();
    })
})
server.listen(3000);