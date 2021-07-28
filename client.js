const net = require("net");
const {IP, PORT} = require('./constants');
// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log(data);
  })
  conn.on('data', function(data) {
    
  });

  return conn;
};

module.exports = {connect};