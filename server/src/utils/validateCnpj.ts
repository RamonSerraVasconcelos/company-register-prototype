function digit(numbers: string): number {
    let index = 2;

    const sum = [...numbers].reverse().reduce((buffer, number) => {
        buffer += Number(number) * index;
        index = index === 9 ? 2 : index + 1;
        return buffer;
    }, 0);

    const mod = sum % 11;

    return mod < 2 ? 0 : 11 - mod;
}

export function validate(cnpj: string | number): boolean {
    // Remove period, slash and dash characters from CNPJ
    const cleaned = cnpj.toString().replace(/[\.\/\-]/g, '');

    if (
        // Must be defined
        !cleaned ||
        // Must have 14 characters
        cleaned.length !== 14 ||
        // Must be digits and not be sequential characters (e.g.: 11111111111111, etc)
        /^(\d)\1+$/.test(cleaned)
    ) {
        return false;
    }

    let registration = cleaned.substr(0, 12);
    registration += digit(registration);
    registration += digit(registration);

    return registration.substr(-2) === cleaned.substr(-2);
}
