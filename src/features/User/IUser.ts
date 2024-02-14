export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export type IUserPayload = Omit<IUser, "id">;
