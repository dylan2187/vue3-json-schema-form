const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
    email: {
      type: 'string',
      format: 'email',
    },
  },
  required: ['foo'],
  additionalProperties: false,
}
const validate = ajv.compile(schema)
const data = {
  foo: 1,
  bar: 'abc',
  email: 'neodylan',
}

const valid = validate(data)
console.log(valid)
if (!valid) console.log(validate.errors)
