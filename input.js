const {connect} = require("./client");
let connection;
const handleUserInput = function (key){
  console.log("Connecting ...");
  console.log(key);
  if(key === '\u0003'){
    process.exit();
  }
  //up
  if(key === 'w'){
    connection.write('Move: up');
  }
  //leftw
  if(key === 'a'){
    connection.write('Move: left');
  }
  //right
  if(key === 'd'){
    connection.write('Move: right');
  }
  //down
  if(key === 's'){
    connection.write('Move: down');
  }
}

const setupInput = function (conn) {
  connection = connect();
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};