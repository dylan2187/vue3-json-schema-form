const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" }
  },
  required: ["foo"],
  additionalProperties: false
}

const schema1 = {
  type: 'string',
  minLength: 10
}

const validate = ajv.compile(schema)
const validate1 = ajv.compile(schema1)

const data = {
  foo: 1,
  bar: "abc"
}
const data1 = 'ff'
const valid = validate1(data1)
if (!valid) console.log(validate1.errors);


// const valid = validate(data)
// console.log(valid);
// if (!valid) console.log(validate.errors)