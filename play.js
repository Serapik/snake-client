// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: "50541",
//   });

//   conn.on("connect", () => {
//     console.log ("Hello");
//   });
//   conn.on('data', (data) => {
//     console.log(data);
//   })
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();

const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
const connection = connect();

setupInput(connection);