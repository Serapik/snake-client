let connection;
let keepMoving;
let speed = 100;
const { moveKeys, msgKeys } = require('./constant');

// setup interface to handle user input from stdin

const setupInput = function (conn) { 
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
  const handleUserInput = function(data) {
    if(data === "q") {
      console.log('EXITING');
    process.exit();
    }
  
  if (data === '8') connection.write('Move: up');
  if (data === '4') connection.write('Move: left');
  if (data === '6') connection.write('Move: right');
  if (data === '2') connection.write('Move: down');

  if (data === '0') connection.write('Say: Catch me if you can!');
  if (data === 'w') connection.write('Say: I wanna be, the very best');
  if (data === '3') connection.write('Say: :P');
  if (data === 'a') connection.write('Say: gotta eat em all');
  for (const [ key, value ] of Object.entries(msgKeys)) {
    if (data === key) connection.write(value);
  }
  for (const [ key, value ] of Object.entries(moveKeys)) {
    if (data === key) {
      clearInterval(keepMoving);
      keepMoving = setInterval(() => {
        connection.write(value);
      }, speed);
    }
  }
  if (data === '=') {
    connection.write(`Say: speed: ${Math.round(1000 / speed * 10) / 10} sq/s`);
    speed -= 10;
  }
  if (data === '-') {
    speed += 10;
    connection.write(`Say: speed: ${Math.round(1000 / speed * 10) / 10} sq/s`);
  }
};


module.exports = setupInput;