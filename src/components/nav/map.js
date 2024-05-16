export const navItems = [
	// {
	// 	categoryName: 'Home',
	// 	ref: '/home',
	// 	items: [
	// 		{
	// 			calcName: 'Welcome',
	// 			ref: '/',
	// 		},
	// 		{
	// 			calcName: 'How-to',
	// 			ref: '/',
	// 		},
	// 	],
	// },
	{
		categoryName: 'Sales',
		ref: '/sales',
		items: [
			{
				calcName: 'Discount',
				ref: '/sales/discount',
			},
			{
				calcName: 'Profit Margin',
				ref: '/sales/margin',
			},
		],
	},
	{
		categoryName: 'Inventory',
		ref: '/inventory',
		items: [
			{
				calcName: 'Min/Max',
				ref: '/inventory/reorderpoint',
			},
		],
	},
];
