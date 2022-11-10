import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const digital=[ ...Array( 24 ) ].map( ( _, index ) => ( {
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index+1}.jpg`,
  name: faker.name.findName(),
  category: faker.company.companyName(),
  contact: sample( [ '023283287, 238238927', '2892323, 3232323' ] ),
  address: sample( [ 'Lahore, Karachi', 'Islamabad, Quetta' ] ),

} ) );

export default digital;
