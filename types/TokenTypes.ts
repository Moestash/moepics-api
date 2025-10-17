export interface EmailToken {
    tokenID: string
    email: string
    token: string
    expires: string
}

export interface $2FAToken {
    tokenID: string
    username: string
    token: string
    qrcode: string
}

export interface PasswordToken {
    tokenID: string
    username: string
    token: string
    expires: string
}

export interface IPToken {
    tokenID: string
    username: string
    token: string
    ip: string
    expires: string
}

export interface APIKey {
    keyID: string
    username: string
    createDate: string
    key: string
}