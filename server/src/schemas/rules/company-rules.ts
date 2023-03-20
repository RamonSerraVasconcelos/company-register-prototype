import { string, number } from 'yup';

const razaoSocial = string().min(2).max(250);
const cnpj = string().min(14);
const endereco = string().min(2).max(250);
const ramoNegocio = string().min(2).max(250);

export const companyRules = {
    razaoSocial,
    cnpj,
    endereco,
    ramoNegocio,
};
