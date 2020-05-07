import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.listen(3333, () => {
  console.log('Server running on port 3333!');
});

app.use(express.json());
app.use(routes);

export default app;
