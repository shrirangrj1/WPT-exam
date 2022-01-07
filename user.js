const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const database2 = {
  host: "localhost",
  user: "root",
  password: "12345",
  database: "p1",
};

async function connCheck() {
  const connection = mysql.createConnection(database2);
  await connection.connectAsync();
  console.log("Connection successful");
  await connection.endAsync();
}

connCheck();

async function addMessage(user) {
  const connection = mysql.createConnection(database2);
  await connection.connectAsync();
  let sql = `INSERT INTO Message(message) values(?)`;
  await connection.queryAsync(sql, [user.message]);
  await connection.endAsync();
  console.log("message added");
}

async function selectMessage() {
  const connection = mysql.createConnection(database2);
  await connection.connectAsync();
  console.log("Inside selectMessage");
  let sql = `select * from userdata`;
  const list = await connection.queryAsync(sql, [10]);
  await connection.endAsync();
  console.log("list of user");
  return list;
}

module.exports = { addMessage, selectMessage };