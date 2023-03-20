import { Request, Response } from 'express';
import { ResponseError } from '@src/ts/classes/response-error';
import companyService from '@src/service/company-service';
import { validate } from '@src/utils/validateCnpj';

const companyController = {
    async register(req: Request, res: Response) {
        const { cnpj } = req.body;

        const isCnpjValid = validate(cnpj);
        if (!isCnpjValid) {
            throw new ResponseError('Invalid CNPJ', 400);
        }

        const isCompanyDuplicated = await companyService.findByCnpj(cnpj);
        if (isCompanyDuplicated.length > 0) {
            throw new ResponseError('Company already registered', 409);
        }

        const company = await companyService.create(req.body);

        return res.status(201).json(company);
    },

    async edit(req: Request, res: Response) {
        if (Object.keys(req.body).length === 0) {
            throw new ResponseError('No data informed!', 400);
        }

        const { id } = req.params;
        const companyData = req.body;

        if (Number.isNaN(Number(id))) {
            throw new ResponseError('Invalid Id format', 400);
        }

        const doesCompanyExist = await companyService.findById(Number(id));
        if (!doesCompanyExist) {
            throw new ResponseError('Company not found', 404);
        }

        if (companyData.cnpj) {
            const isCnpjValid = validate(companyData.cnpj);
            if (!isCnpjValid) {
                throw new ResponseError('Invalid CNPJ', 400);
            }

            const isCompanyDuplicated = await companyService.findByCnpj(companyData.cnpj);
            if (isCompanyDuplicated.length > 0) {
                throw new ResponseError('Company already registered', 409);
            }
        }

        const company = await companyService.update(Number(id), companyData);

        return res.status(200).json(company);
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (Number.isNaN(Number(id))) {
            throw new ResponseError('Invalid Id format', 400);
        }

        const doesCompanyExist = await companyService.findById(Number(id));
        if (!doesCompanyExist) {
            throw new ResponseError('Company not found', 404);
        }

        await companyService.delete(Number(id));

        return res.sendStatus(200);
    },

    async list(req: Request, res: Response) {
        const companies = await companyService.list();

        if (companies.length === 0) {
            throw new ResponseError('No companies found', 204);
        }

        return res.status(200).json(companies);
    },

    async get(req: Request, res: Response) {
        const { id } = req.params;

        if (Number.isNaN(Number(id))) {
            throw new ResponseError('Invalid Id format', 400);
        }

        const company = await companyService.findById(Number(id));

        if (!company) {
            throw new ResponseError('Company not found', 404);
        }

        return res.status(200).json(company);
    },
};

export default companyController;
