// Importing MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      
      if (Object.hasOwnProperty.call(ob, key)) {
       
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  


var orm = {
    selectAll:function(tableInput,cb) {
        var queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, function (err, result) {
           if (err) {
               throw err;
           } 
           cb(result);
        });
    },


    insertOne: function(tableInput, cols, vals, cb) {
        var queryString = `SELECT * FROM ${tableInput} ${cols} ${vals};`
        connection.query(queryString, function (err, result) {
           if (err) {
               throw err;
           } 
           cb(result);
        });
    
    },


    updateOne: function(tableInput, cols,boolean, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET ${cols} = ${boolean} ${condition}`;
        connection.query(queryString, function (err, result) {
           if (err) {
               throw err;
           } 
           cb(result);
        });
    }

}

module.exports = orm;










    