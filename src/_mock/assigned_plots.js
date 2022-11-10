import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const digital=[ ...Array( 24 ) ].map( ( _, index ) => ( {
  id: faker.datatype.uuid(),
  plot_no: sample( [ '23-A', '84-6A', '209-G', '88-K' ] ),
  area: sample( [ '3 Marla', '5 Marla', '10 Marla', '1 Kanal' ] ),
  block: sample( [ 'Haider-block', 'Roman-block', 'Umer-block' ] ),
  customer: faker.company.companyName(),
  cnic: sample( [ '355232-232323-3', '351112-433342-3' ] ),

} ) );

export default digital;
