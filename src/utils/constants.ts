const ProductImage1 = require('../assets/images/product1.jpg');
const ProductImage2 = require('../assets/images/product2.jpg');
const ProductImage3 = require('../assets/images/product3.jpg');
const ProductImage4 = require('../assets/images/product4.jpg');
const DesignImage1 = require('../assets/images/ds1.jpg');
const DesignImage2 = require('../assets/images/ds2.jpg');
const DesignImage3 = require('../assets/images/ds3.jpg');
const DesignImage4 = require('../assets/images/ds4.jpg');

const ProjectImage1 = require('../assets/images/pj1.jpg');
const ProjectImage2 = require('../assets/images/pj2.jpg');
const ProjectImage3 = require('../assets/images/pj3.jpg');
const ProjectImage4 = require('../assets/images/pj4.jpg');

export const DATA_PRODUCT = [
	{
		id: 0,
		name: 'Arm Sofas',
		price: '$45.80',
		image: ProductImage1,
	},
	{
		id: 1,
		name: 'Living table',
		price: '$45.80',
		image: ProductImage2,
	},
	{
		id: 2,
		name: 'Floor lamp',
		price: '$45.80',
		image: ProductImage3,
	},
	{
		id: 3,
		name: 'Arm Sofas',
		price: '$45.80',
		image: ProductImage4,
	},
] as const;

export const DATA_PROJECT = [
	{
		id: 0,
		label: 'Project',
		price: 'Mono Redesign',
		image: ProjectImage1,
	},
	{
		id: 1,
		label: 'Project',

		price: 'Mono Redesign',
		image: ProjectImage2,
	},
	{
		id: 2,
		label: 'Project',

		price: 'Mono Redesign',
		image: ProjectImage3,
	},
	{
		id: 3,
		label: 'Project',

		price: 'Mono Redesign',
		image: ProjectImage4,
	},
] as const;

export const DATA_DESIGNED = [
	{
		id: 0,
		image: DesignImage1,
	},
	{
		id: 0,
		image: DesignImage2,
	},
	{
		id: 0,
		image: DesignImage3,
	},
	{
		id: 0,
		image: DesignImage4,
	},
] as const;

export const DATA_DESIGNER = [
	{
		id: 0,
		image: require('../assets/images/d1.jpg'),
	},
	{
		id: 1,
		image: require('../assets/images/d2.jpg'),
	},
	{
		id: 2,
		image: require('../assets/images/d3.jpg'),
	},
	{
		id: 3,
		image: require('../assets/images/d4.jpg'),
	},
] as const;

export const MENU_LIST = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Blog',
		path: '/blog',
	},
	{
		name: 'Facebook',
		path: 'https://www.facebook.com/KofWoTH',
	},
	{
		name: 'Zalo',
		path: 'https://zalo.me/0345197586',
	},
	{
		name: 'Contact: 034 519 7586',
		path: '/blog',
	},
] as const;

export const DATA_BLOG = [
	{
		id: 0,
		image: require('../assets/images/blog1.jpg'),
		title: 'Going all-in with millennial design',
		date: '14 Oct 2022',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
	},
	{
		id: 1,
		image: require('../assets/images/blog2.jpg'),
		title: 'Exploring new ways of decorating',
		date: '14 Oct 2022',

		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
	},
	{
		id: 2,
		image: require('../assets/images/blog3.jpg'),
		title: 'Handmade pieces that took time to make',
		date: '14 Oct 2022',

		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
	},
] as const;

export const DATA_RECENT_POSTS = [
	{
		id: 0,
		image: require('../assets/images/rc1.jpg'),
		title: 'Going all-in with millennial design',
		date: '03 Aug 2022',
	},
	{
		id: 1,
		image: require('../assets/images/rc2.jpg'),
		title: 'Exploring new ways of decorating',
		date: '03 Aug 2022',
	},
	{
		id: 2,
		image: require('../assets/images/rc3.jpg'),
		title: 'Handmade pieces that took time to make',
		date: '03 Aug 2022',
	},
	{
		id: 3,
		image: require('../assets/images/rc4.jpg'),
		title: 'Going all-in with millennial design',
		date: '03 Aug 2022',
	},
	{
		id: 4,
		image: require('../assets/images/rc5.jpg'),
		title: 'Colorful office redesign',
		date: '03 Aug 2022',
	},
] as const;
