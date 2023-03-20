import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: `${__dirname}/../.env` });

app.listen(process.env.SERVER_PORT, () => {
    console.info(`server - started at ${process.env.SERVER_URL}`);
});
