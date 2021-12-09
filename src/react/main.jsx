import React from 'react';
import ReactDOM from 'react-dom';

import { test } from '../modules/test';

import './vendor.scss';
import './main.scss';

const Main = () => {
	test();

	return (
		<div>Application loaded</div>
	);
};

ReactDOM.render(<Main />, document.querySelector('#application-root'));