import {API} from "../api"

export class TokenRoutes {
    public constructor(private readonly api: API) {}

    public create2FA = async () => {
        const response = await this.api.post("/api/2fa/create", undefined)
        return response as string
    }

    public getQR = async () => {
        const response = await this.api.post("/api/2fa/qr", undefined)
        return response as string
    }

    public enable2FA = async (token: string) => {
        const response = await this.api.post("/api/2fa/enable", {token})
        return response as string
    }

    public verify2FA = async (token: string) => {
        const response = await this.api.post("/api/2fa", {token})
        return response as string
    }

    public delete2FA = async () => {
        const response = await this.api.delete("/api/2fa/delete", undefined)
        return response as string
    }
}