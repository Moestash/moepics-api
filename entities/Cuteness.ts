import {API} from "../api"
import type {Cuteness} from "../types/Types"

export class CutenessRoutes {
    public constructor(private readonly api: API) {}

    public get = async (postID: string) => {
        const response = await this.api.get("/api/cuteness", {postID})
        return response as Cuteness | undefined
    }

    public update = async (postID: string, cuteness: number) => {
        const response = await this.api.post("/api/cuteness/update", {postID, cuteness})
        return response as string
    }

    public delete = async (postID: string) => {
        const response = await this.api.delete("/api/cuteness/delete", {postID})
        return response as string
    }
}