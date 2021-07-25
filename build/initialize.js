"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.initializeDatabase = void 0;

const initializeDatabase = driver => {
  const initCypher = `CALL apoc.schema.assert({}, {User: ["userId"], Business: ["businessId"], Review: ["reviewId"], Category: ["name"]})`;

  const executeQuery = driver => {
    const session = driver.session();
    return session.writeTransaction(tx => tx.run(initCypher)).then().finally(() => session.close());
  };

  executeQuery(driver).catch(error => {
    console.error('Database initialization failed to complete\n', error.message);
  });
};

exports.initializeDatabase = initializeDatabase;