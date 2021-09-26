import express = require('express');
import routes from './routes/index';

const port = 3000;
const app = express();

app.use(express.json());
app.use(routes);
app.listen(port, () => {
    console.log(`Services are running at port ${port}`);
});
