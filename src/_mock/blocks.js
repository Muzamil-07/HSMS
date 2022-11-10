import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const blocks=[ ...Array( 24 ) ].map( ( _, index ) => ( {
  id: faker.datatype.uuid(),
  name: sample( [ 'Haider-block', 'Roman-block', 'Umer-block' ] ),
  no_of_plots: sample( [ '35', '50', '10', '12' ] ),
  remaining_plots: sample( [ '1', '9', '4', '6' ] ),
  plot_categories: sample( [ 'Residential, Commercial', 'Overseas, Commercial', 'Residential' ] ),
} ) );

export default blocks;
