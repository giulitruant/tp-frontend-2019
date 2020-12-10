export enum MessageType {
    Success = 1,
    Info = 0,
    Warning = -1,
    Danger = -99
}

export interface InfoModalData{
    message: string;
    actionType: MessageType;
}