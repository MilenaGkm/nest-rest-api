export interface Msg {
    id?: string;
    sender_id: string;
    reciever_id: string;
    subject: string;
    body: string;
    date: string;
    isActive: boolean;
}
