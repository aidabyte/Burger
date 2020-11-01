// Importing MySQL connection.
var connection = require("../config/connection.js");


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


    updateOne: function(tableInput, cols, vals, cb) {
        var queryString = `SELECT * FROM ${tableInput} ${cols} ${vals};`
        connection.query(queryString, function (err, result) {
           if (err) {
               throw err;
           } 
           cb(result);
        });
    }

}

modeule.export = orm;









    