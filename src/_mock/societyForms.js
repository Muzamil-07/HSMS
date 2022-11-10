import { faker } from '@faker-js/faker'

// ----------------------------------------------------------------------

const societyForms = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  form: 'Transfer land form',
  category: faker.name.findName()
}))

export default societyForms
