import React from 'react';

export default function ExternalLink({ title, url }) {
	return (
		<a href={url} target='_blank'>
			{title} ↗
		</a>
	);
}
