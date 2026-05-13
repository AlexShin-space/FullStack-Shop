const { query } = require('./db');
const { products } = require('./data/products');
const { promocodes } = require('./data/promo');

const initDb = async () => {
  try {
    console.log('Initializing database...');

    // Create products table
    await query(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(50) PRIMARY KEY,
        category VARCHAR(100),
        name VARCHAR(255),
        description TEXT,
        attributes JSONB,
        colors TEXT[],
        sizes TEXT[],
        photos TEXT[],
        first_price NUMERIC,
        current_price NUMERIC
      )
    `);
    console.log('Products table created or already exists.');

    // Create promocodes table
    await query(`
      CREATE TABLE IF NOT EXISTS promocodes (
        code VARCHAR(50) PRIMARY KEY,
        discount INTEGER
      )
    `);
    console.log('Promocodes table created or already exists.');

    // Seed products
    for (const product of products) {
      await query(`
        INSERT INTO products (id, category, name, description, attributes, colors, sizes, photos, first_price, current_price)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        ON CONFLICT (id) DO UPDATE SET
          category = EXCLUDED.category,
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          attributes = EXCLUDED.attributes,
          colors = EXCLUDED.colors,
          sizes = EXCLUDED.sizes,
          photos = EXCLUDED.photos,
          first_price = EXCLUDED.first_price,
          current_price = EXCLUDED.current_price
      `, [
        product.id,
        product.category,
        product.name,
        product.description,
        JSON.stringify(product.attributes),
        product.colors,
        product.sizes,
        product.photos,
        product.firstPrice,
        product.currentPrice
      ]);
    }
    console.log('Products seeded.');

    // Seed promocodes
    for (const [code, discount] of Object.entries(promocodes)) {
      await query(`
        INSERT INTO promocodes (code, discount)
        VALUES ($1, $2)
        ON CONFLICT (code) DO UPDATE SET
          discount = EXCLUDED.discount
      `, [code, discount]);
    }
    console.log('Promocodes seeded.');

    console.log('Database initialization complete.');
    process.exit(0);
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
};

initDb();
