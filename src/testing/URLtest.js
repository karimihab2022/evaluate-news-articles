import { checkURL } from "../client/js/URLch";

describe("Testing the existing of the url", () => {
  test("Testing the checkURL() function is defined", () => {
    expect(checkURL).toBeDefined();
  });
});  
describe("Testing the functionality of the url", () => {
    test("Testing the checkURL() to be a function", () => {
      expect(typeof checkURL).toBe('function');
    });  
});  
