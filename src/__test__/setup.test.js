const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

describe("Spaced Rep app testing", () => {
  it("Should be true", () => {
    expect(true).to.equal(true);
  });
});
