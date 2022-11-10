import { faker } from '@faker-js/faker'
import { sample } from 'lodash'

// ----------------------------------------------------------------------

const complaint = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  severity: sample(['low', 'medium', 'high']),
  email: 'test@test.com',
  subject: 'Water issue',
  complaintNo: '123'
}))

export default complaint
