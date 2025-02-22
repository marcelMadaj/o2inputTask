export const validateEmail = (email: string): boolean => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePostalCode = (postalCode: string): boolean => {
    const postalCodeRegex = /^[0-9]{5}$/;
    return postalCodeRegex.test(postalCode);
};

export const validateName = (name: string): boolean => {
    const trimmedName = name.trim();
    if (trimmedName.length < 2) return false;
    const nameRegex = /^[A-Za-zÀ-ž\s]+$/;
    return nameRegex.test(trimmedName);
};

