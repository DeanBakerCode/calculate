import React, { useEffect, useRef, useState } from 'react';
import { CalcItem, Reset } from '../../ui';
import '../calcStyles.css';

export default function Margin() {
	const cost = useRef(null);
	const sell = useRef(null);
	const margin = useRef(null);
	const profit = useRef(null);
	// focus on the first input on mount
	useEffect(() => cost.current.focus());
	//
	const reset = () => {
		cost.current.value = null;
		sell.current.value = null;
		margin.current.value = null;
		profit.current.value = null;
		cost.current.focus();
	};
	// find the margin and profit
	const handleChange = () => {
		// if these two feilds are not empty
		if (cost.current.value && sell.current.value) {
			const marginvalue = (100 * (sell.current.value - cost.current.value)) / sell.current.value;
			margin.current.value = marginvalue.toFixed(2);
			// profit
			profit.current.value = (sell.current.value - cost.current.value).toFixed(2);
		}
	};
	// find the sell price to match margin
	const handleChangeMargin = () => {
		//use the cost and change the sell price
		if (cost.current.value && margin.current.value) {
			// sell price
			const decimal = margin.current.value / 100;
			sell.current.value = (cost.current.value / (1 - decimal)).toFixed(2);
			profit.current.value = (sell.current.value - cost.current.value).toFixed(2);
		}
	};
	//
	return (
		<div className='calcPage'>
			<div>
				<h1>Profit Margin</h1>
				<p className='calcAbout'>
					Profit margin is a financial ratio that measures the percentage of profit earned by a company in relation to its revenue.
					Expressed as a percentage, it indicates how much profit the company makes for every dollar of revenue generated. Profit margin is
					important because this percentage provides a comprehensive picture of the operating efficiency of a business or an industry. All
					margin changes provide useful indicators for assessing growth potential, investment viability and the financial stability of a
					company relative to its competitors. Maintaining a healthy profit margin will help to ensure the financial success of a business.
					<br />
					<a href='https://en.wikipedia.org/wiki/Profit_margin' target='_blank'>
						<em>Wikipedia extract</em>
					</a>
				</p>
			</div>

			<div className='calcContainer'>
				<CalcItem title='cost' type='number' downRef={cost} onChange={handleChange} unit='$' />
				<CalcItem title='sell' type='number' downRef={sell} onChange={handleChange} unit='$' />
				<CalcItem title='margin' type='number' downRef={margin} onChange={handleChangeMargin} unit='%' />
				<CalcItem title='profit' type='number' downRef={profit} disabled={true} unit='$' />
				<Reset onClick={reset} />
			</div>
		</div>
	);
}
