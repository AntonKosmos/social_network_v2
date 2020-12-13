export const required = (value) => {
    if(!value) return "Field is required";
    return undefined;
};

export const generateMaxLength = (maxLength) => (value) => {
    if(value.length > maxLength) return "Max length is " + maxLength;
    return undefined;
}