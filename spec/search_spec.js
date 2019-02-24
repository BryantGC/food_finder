var Request = require("request");

describe ("Appserver", () => {
  var appserver;
  beforeAll(() => {
    appserver = require("../app");
  });
  afterAll(() => {
    appserver.close();
  });
  describe("GET /getplaces", () => {
    var data = {};
    beforeAll((done) => {
      Request.get("http://localhost:3000/", (error, response, body) => {
        
      });
    });
  })
});
