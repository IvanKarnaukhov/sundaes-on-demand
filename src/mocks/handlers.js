import { rest } from 'msw';


export const handlers = [
	rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: 'Chocolate', imagePath: '/images/chocolate.png' },
				{ name: 'Vanilla', imagePath: '/images/vanilla.png' }
			])
		);
	}),
	rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
		return res(
			ctx.json([
				{ name: 'Cherries', imagePath: '/image/cherries.png' },
				{ name: 'M&Ms', imagePath: '/image/m-and-m.png' },
				{ name: 'Hot fudge', imagePath: '/image/hot-fudge.png' },
			])
		);
	})
];
