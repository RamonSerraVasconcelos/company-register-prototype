import { Router } from 'express';
import { validate } from '@src/middlewares/validate-middleware';
import { companySchema } from '@src/schemas/company-schema';
import { tryCatch } from '@src/utils/try-catch';
import companyController from '@src/controller/company-controller';

const routes = Router();

routes.post('/', validate(companySchema.register), tryCatch(companyController.register));
routes.patch('/:id', tryCatch(companyController.edit));
routes.delete('/:id', tryCatch(companyController.delete));
routes.get('/', tryCatch(companyController.list));
routes.get('/:id', tryCatch(companyController.get));

export default routes;
