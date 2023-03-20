import { Router } from 'express';
import companyRoutes from '@src/routes/company-routes';

const routes = Router();

routes.use('/company', companyRoutes);

export default routes;
