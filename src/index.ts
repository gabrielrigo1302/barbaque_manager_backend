import express = require('express');
import routes from './routes/index';
const cors = require('cors');

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => {
    console.log(`Services are running at port ${port}`);
});
