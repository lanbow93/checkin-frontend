export type IAccount = {
    _id: string,
    name: string,
    badgeName: string,
    email: string,
    groupNames: Array<String>,
    currentTask:Array<Array<String>>,
    adminOf: Array<String>,
    accountID: string,
    isSiteAdmin: Boolean,
    isGroupAdmin: Boolean,
    isScheduleAdmin: Boolean,
    createdAt: Date,
    updatedAt: Date
}