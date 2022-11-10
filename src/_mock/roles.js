import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const roles = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
  permissions: sample(['Manage Users', 'Manage Plots','Manage Content']),
  
}));

export default roles;
