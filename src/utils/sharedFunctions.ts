export const validateNoSpaces = (value: string) => {
    // Regex to check if value has spaces
    if (/\s/.test(value)) {
        return 'Username cannot contain spaces'
    }
    // Return an empty string for no validation error
    return ''
}
