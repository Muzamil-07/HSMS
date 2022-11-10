import { faker } from '@faker-js/faker'

// ----------------------------------------------------------------------

const notification = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  cnic: '23455-233434-4',
  notificationNo: '1',
  title: 'Announcement'
}))

export default notification
