import React from 'react';
import generateUniqueId from './util/idGenerator';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var switchClassName = 'switch';

// Switch component.
function Switch (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.id === 'undefined') outProps.id = 'switch_'+generateUniqueId();
	if (typeof outProps.className === 'undefined') outProps.className = '';
	var childrenToRender = [];
	var switchProps = Object.assign({}, outProps);
	switchProps.key = outProps.id + '_input';
	if (typeof switchProps.type === 'undefined' || switchProps.type != 'radio') switchProps.type = 'checkbox';
	delete switchProps.labelText;
	childrenToRender.push(
		React.createElement(
			'input', switchProps
		)
	);
	var labelProps = Object.assign({}, outProps);
	labelProps.key = outProps.id + '_label';
	labelProps['htmlFor'] = outProps.id;
	labelProps.children = outProps.labelText;
	labelProps.className += ' ' + switchClassName;
	delete labelProps.id;
	delete labelProps.labelText;
	delete labelProps.type;
	childrenToRender.push(
		React.createElement(
			'label', labelProps, labelProps.children
		)
	);
	return React.createElement(
		'div', {className : outProps.className+' '+inputGroupClassName}, childrenToRender
	);
}

export default Switch;
