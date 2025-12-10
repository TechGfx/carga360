import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection Configuration
// NOTA: Asegúrate de configurar estas variables con tus credenciales reales
const db = mysql.createPool({
  host: 'mysql.us.stackcp.com',
  port: 41006,
  user: 'carga360-35303938a14f',
  password: 'F%WN%@W/o|ks',   // SIN contraseña
  database: 'carga360-35303938a14f',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test Database Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error conectando a la base de datos MySQL:', err);
  } else {
    console.log('Conectado exitosamente a la base de datos MySQL');
    connection.release();
  }
});

// API Endpoint to handle Demo Requests
app.post('/api/demo-requests', (req, res) => {
  const { fullName, email, companyName, fleetSize } = req.body;

  if (!fullName || !email || !companyName || !fleetSize) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const query = `
    INSERT INTO demo_requests (full_name, email, company_name, fleet_size) 
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [fullName, email, companyName, fleetSize], (err, result) => {
    if (err) {
      console.error('Error insertando datos:', err);
      // Handle duplicate entry for unique email constraint
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Este correo electrónico ya tiene una solicitud registrada.' });
      }
      return res.status(500).json({ message: 'Error interno del servidor al guardar datos' });
    }
    
    res.status(201).json({ 
      message: 'Solicitud creada exitosamente', 
      id: result.insertId 
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});