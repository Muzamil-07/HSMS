import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const plots=[ ...Array( 24 ) ].map( ( _, index ) => ( {
  id: faker.datatype.uuid(),
  plot_no: sample( [ '23-A', '84-6A', '209-G', '88-K' ] ),
  area: sample( [ '3 Marla', '5 Marla', '10 Marla', '1 Kanal' ] ),
  block: sample( [ 'Haider-block', 'Roman-block', 'Umer-block' ] ),
  category: sample( [ 'Residential', 'Commercial', 'Overseas' ] ),
} ) );

export default plots;
