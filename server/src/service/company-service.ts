import { prisma } from '@src/lib/prisma';
import { ICompany } from '@src/ts/interfaces/Icompany';

const selectCompany = {
    id: true,
    razaoSocial: true,
    cnpj: true,
    endereco: true,
    ramoNegocio: true,
    createdAt: true,
};

const companyService = {
    async create(company: ICompany) {
        const createdCompany = await prisma.company.create({
            data: {
                razaoSocial: company.razaoSocial,
                cnpj: company.cnpj,
                endereco: company.endereco,
                ramoNegocio: company.ramoNegocio,
            },
            select: selectCompany,
        });

        return createdCompany;
    },

    async update(id: number, company: ICompany) {
        const updatedCompany = await prisma.company.update({
            where: {
                id,
            },
            data: {
                razaoSocial: company.razaoSocial || undefined,
                cnpj: company.cnpj || undefined,
                endereco: company.endereco || undefined,
                ramoNegocio: company.ramoNegocio || undefined,
            },
        });

        return updatedCompany;
    },

    async delete(id: number) {
        const deletedUser = await prisma.company.delete({
            where: {
                id,
            },
        });

        return deletedUser;
    },

    async list() {
        const companies = await prisma.company.findMany({
            select: selectCompany,
        });

        return companies;
    },

    async get(id: number) {
        const company = await prisma.company.findUnique({
            where: {
                id,
            },
            select: selectCompany,
        });

        return company;
    },

    async findById(id: number) {
        const company = await prisma.company.findUnique({
            where: {
                id,
            },
            select: selectCompany,
        });

        return company;
    },

    async findByCnpj(cnpj: string) {
        const company = await prisma.company.findMany({
            where: {
                cnpj,
            },
            select: selectCompany,
        });

        return company;
    },
};

export default companyService;
