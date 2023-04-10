const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)
// ajv.addFormat('test', (data) => {
//   console.log(data)
//   return data === 'haha'
// })

ajv.addKeyword({
  keyword: 'xyz_example',
  validate: function (schema, data) {
    if (schema === true) return true
    else return schema.length === 6
  },
  errors: false,
})
const schema = {
  type: 'object',
  properties: {
    foo: { type: 'integer' },
    bar: { type: 'string' },
    email: {
      type: 'string',
      xyz_example: false,
    },
  },
  required: ['foo'],
  additionalProperties: false,
}
const validate = ajv.compile(schema)
const data = {
  foo: 1,
  bar: 'abc',
  email: '哈哈1',
}

const valid = validate(data)
console.log(valid)
if (!valid) {
  localize.zh(validate.errors)

  console.log(validate.errors)
}
