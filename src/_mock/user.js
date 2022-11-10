import { faker } from '@faker-js/faker'
import { sample } from 'lodash'

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  cnic: '35200-1532192-3',
  status: sample(['active', 'banned']),
  email: 'test@test.com',
  plot: '35-b'
}))

export default users
