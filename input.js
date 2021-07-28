const {connect} = require("./client");
const handleUserInput = function (key){
  let conn = connect();
  console.log("Connecting ...");
  console.log(key);
  if(key === '\u0003'){
    process.exit();
  }
  //up
  if(key === 'w'){
    conn.write('Move: up');
  }
  //leftw
  if(key === 'a'){
    conn.write('Move: left');
  }
  //right
  if(key === 'd'){
    conn.write('Move: right');
  }
  //down
  if(key === 's'){
    conn.write('Move: down');
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};