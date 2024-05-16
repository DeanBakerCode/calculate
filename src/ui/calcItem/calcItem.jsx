import React from 'react';
import './calcItem.css';

export default function CalcItem({ title, type, downRef, onChange, disabled, placeholder, defaultValue, unit }) {
	return (
		<div className='calcItemContainer'>
			<label htmlFor={title} className='calcLable'>
				{title}
			</label>
			<input
				type={type}
				name={title}
				id={title}
				className='calcInput'
				ref={downRef}
				onChange={onChange}
				disabled={disabled}
				placeholder={placeholder}
				defaultValue={defaultValue}
			/>
			<label htmlFor={title} className='calcLable calcUnit'>
				{unit}
			</label>
		</div>
	);
}
