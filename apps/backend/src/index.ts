import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDoc } from './swagger.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Docs: http://localhost:${PORT}/api-docs`);
});
