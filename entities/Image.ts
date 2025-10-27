import {API} from "../api"
import type {ImageUpdateColumns} from "../types/Types"

export class ImageRoutes {
    public constructor(private readonly api: API) {}

    public updateSource = async (params: {imageID: string, altSource: string, 
        directLink: string, unverified?: boolean, reason?: string}) => {
        const response = await this.api.put("/api/image/source", params)
        return response as string
    }

    public update = async (imageID: string, column: ImageUpdateColumns, value: any) => {
        const response = await this.api.put("/api/image/update", {imageID, column, value})
        return response as string
    }
}