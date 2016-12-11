import './index.css';

import numeral from 'numeral';

const coureValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${coureValue} for this awesome course!`);//eslint-disable-line no-console
