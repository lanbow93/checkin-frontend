import { IAccount } from "./sharedTypes"

export const validateNoSpaces = (value: string) => {
    // Regex to check if value has spaces
    if (/\s/.test(value)) {
        return 'Username cannot contain spaces'
    }
    // Return an empty string for no validation error
    return ''
}

export const determineUserStatus = (account: IAccount) => {
    if (account.isSiteAdmin) {
        return "siteAdmin"
    } else if (account.isScheduleAdmin) {
        return "scheduleAdmin"
    } else if (account.isGroupAdmin) {
        return "groupAdmin"
    } else {
        return "user"
    }
}