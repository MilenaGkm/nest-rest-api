export class CreateMsgDto {
    readonly sender_id: string;
    readonly reciever_id: string;
    readonly subject: string;
    readonly body: string;
    readonly date: string;
    readonly isActive: boolean;
}

export class CreateManyMsgDto {
    readonly sender_id: string;
    readonly reciever_ids: [string];
    readonly subject: string;
    readonly body: string;
    readonly date: string;
    readonly isActive: boolean;
}

