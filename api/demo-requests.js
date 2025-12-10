import mysql from 'mysql2/promise';

// CREATE A CONNECTION POOL (serverless-friendly)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { fullName, email, companyName, fleetSize } = req.body;

    if (!fullName || !email || !companyName || !fleetSize) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = `
      INSERT INTO demo_requests (full_name, email, company_name, fleet_size)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
      fullName,
      email,
      companyName,
      fleetSize
    ]);

    return res.status(201).json({
      message: 'Solicitud creada exitosamente',
      id: result.insertId
    });

  } catch (err) {
    console.error('Error insertando datos:', err);

    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Este correo ya está registrado' });
    }

    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
