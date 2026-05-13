const products = [
    {
        id: 'travel01',
        category: 'travel-bags',
        name: 'Voyager Elite Duffle Bag',
        description: 'Premium travel duffle bag designed for long trips and weekend escapes. Features waterproof materials, reinforced handles, and spacious compartments for modern travelers.',
        attributes: [
            ['Capacity:', '42L'],
            ['Material:', 'Premium Waterproof Nylon'],
            ['Model:', 'VE-4201'],
            ['Type:', 'Travel Duffle']
        ],
        colors: ['black', 'graphite'],
        sizes: ['42L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 320,
        currentPrice: 259,
    },

    {
        id: 'travel02',
        category: 'travel-bags',
        name: 'Nord Cabin Carry Bag',
        description: 'Luxury carry-on travel bag optimized for airplane cabins. Lightweight construction with premium finishing and organized inner storage.',
        attributes: [
            ['Capacity:', '35L'],
            ['Material:', 'Leather & Nylon'],
            ['Model:', 'NC-1802'],
            ['Type:', 'Carry-On']
        ],
        colors: ['brown', 'black'],
        sizes: ['35L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 410,
        currentPrice: 349,
    },

    {
        id: 'backpack01',
        category: 'backpacks',
        name: 'Urban Motion Backpack',
        description: 'Modern premium backpack with minimalist aesthetics and ergonomic comfort for city lifestyle and everyday use.',
        attributes: [
            ['Capacity:', '28L'],
            ['Material:', 'Matte Polyester'],
            ['Model:', 'UM-2801'],
            ['Type:', 'Urban Backpack']
        ],
        colors: ['black', 'grey'],
        sizes: ['28L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 220,
        currentPrice: 179,
    },

    {
        id: 'backpack02',
        category: 'backpacks',
        name: 'Norden Alpine Backpack',
        description: 'Premium sporty backpack inspired by Scandinavian outdoor design. Durable construction with multiple smart storage zones.',
        attributes: [
            ['Capacity:', '32L'],
            ['Material:', 'Cordura Fabric'],
            ['Model:', 'NA-3209'],
            ['Type:', 'Outdoor Backpack']
        ],
        colors: ['olive', 'black'],
        sizes: ['32L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 290,
        currentPrice: 239,
    },

    {
        id: 'business01',
        category: 'business-and-laptop-bags',
        name: 'Executive Leather Briefcase',
        description: 'Elegant business briefcase crafted for professionals. Includes padded laptop section and premium genuine leather finish.',
        attributes: [
            ['Laptop Size:', '16 inch'],
            ['Material:', 'Genuine Leather'],
            ['Model:', 'EX-1601'],
            ['Type:', 'Business Briefcase']
        ],
        colors: ['dark brown', 'black'],
        sizes: ['16 inch'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 520,
        currentPrice: 459,
    },

    {
        id: 'business02',
        category: 'business-and-laptop-bags',
        name: 'Aero Laptop Messenger',
        description: 'Slim premium messenger bag with modern aesthetics for work, meetings, and travel. Built for professionals who value authentic style.',
        attributes: [
            ['Laptop Size:', '15 inch'],
            ['Material:', 'Premium Vegan Leather'],
            ['Model:', 'AL-1508'],
            ['Type:', 'Messenger Bag']
        ],
        colors: ['black', 'navy'],
        sizes: ['15 inch'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 340,
        currentPrice: 299,
    },

    {
        id: 'sport01',
        category: 'sport-and-active-bags',
        name: 'Titan Gym Duffle',
        description: 'High-performance gym bag created for active lifestyle. Ventilated shoe section and durable water-resistant exterior.',
        attributes: [
            ['Capacity:', '38L'],
            ['Material:', 'Waterproof Polyester'],
            ['Model:', 'TG-3810'],
            ['Type:', 'Gym Bag']
        ],
        colors: ['black', 'red'],
        sizes: ['38L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 260,
        currentPrice: 199,
    },

    {
        id: 'sport02',
        category: 'sport-and-active-bags',
        name: 'Velocity Active Pack',
        description: 'Sport-inspired premium backpack designed for training, movement, and urban active lifestyle.',
        attributes: [
            ['Capacity:', '24L'],
            ['Material:', 'Ripstop Nylon'],
            ['Model:', 'VA-2402'],
            ['Type:', 'Active Backpack']
        ],
        colors: ['white', 'black'],
        sizes: ['24L'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 240,
        currentPrice: 189,
    },

    {
        id: 'accessory01',
        category: 'accessories',
        name: 'Heritage Leather Wallet',
        description: 'Compact premium wallet handcrafted with authentic leather texture and minimalist luxury design.',
        attributes: [
            ['Material:', 'Italian Leather'],
            ['Model:', 'HW-1102'],
            ['Type:', 'Wallet']
        ],
        colors: ['brown', 'black'],
        sizes: ['One Size'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 120,
        currentPrice: 89,
    },

    {
        id: 'accessory02',
        category: 'accessories',
        name: 'Travel Organizer Pro',
        description: 'Luxury organizer for documents, passports, cables, and accessories. Perfect companion for premium travelers.',
        attributes: [
            ['Material:', 'Waterproof Nylon'],
            ['Model:', 'TO-0901'],
            ['Type:', 'Organizer']
        ],
        colors: ['graphite', 'black'],
        sizes: ['One Size'],
        photos: [
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg',
            'https://www.34play.me/loaded/catalog/goods/thumbs/c510b80d6174bacea2191cfb05510a2d.jpg'
        ],
        firstPrice: 95,
        currentPrice: 69,
    },
];

module.exports = { products };