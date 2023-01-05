export interface iCreateUser {
    email: string,
    password: string
}

export interface iReturnCreateUser {
    email: string
    id: string
}

export interface iLoginUser extends iCreateUser {}

export interface iReturnLoginUser {
    accessToken: string
}