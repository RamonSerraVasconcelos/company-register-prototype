import { object } from 'yup';
import { companyRules } from '@src/schemas/rules/company-rules';

const register = object({
    razaoSocial: companyRules.razaoSocial.required(),
    cnpj: companyRules.cnpj.required(),
    endereco: companyRules.endereco.required(),
    ramoNegocio: companyRules.ramoNegocio.required(),
});

export const companySchema = {
    register,
};
