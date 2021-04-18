import  { subtract } from("./utilities/subtract.js");
import  { spaceReplace } from("./utilities(spaceReplace.js");
import  { returnPerson } from("./utilities/returnPerson.js");
import  { Heading } from ("./components/Heading.js");

// ****

test("heading contains Workflow 2", () => {
    expect(
        Heading()
    ).toMatch(/Workflow 2/);
});

// ****

test("subtracted two numbers", () => {
    expect(
        subtract(1, 2)
    ).toBe(-1)
});

// ****

test("replaced space with dash", () => {
    expect(
        spaceReplace("aa aa")
    ).toEqual("aa-aa");
});

// ****

test('object assignment is valid', () => {
    expect(returnPerson("Alfred", 29)).toEqual({name: "Alfred", age: 29});
  });