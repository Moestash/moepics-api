import {API} from "../api"
import type {UploadParams, UnverifiedUploadParams,
ApproveParams, EditParams, UnverifiedEditParams} from "../types/Types"

export class UploadRoutes {
    public constructor(private readonly api: API) {}

    public upload = async (params: UploadParams) => {
        const response = await this.api.post("/api/post/upload", params)
        return response as string
    }

    public uploadUnverified = async (params: UnverifiedUploadParams) => {
        const response = await this.api.post("/api/post/upload/unverified", params)
        return response as string
    }

    public approve = async (params: ApproveParams) => {
        const response = await this.api.post("/api/post/approve", params)
        return response as string
    }

    public reject = async (postID: string) => {
        const response = await this.api.post("/api/post/reject", {postID})
        return response as string
    }

    public splitVariation = async (params: {postID: string, order: number | null, mergeSubsequent?: boolean}) => {
        const response = await this.api.post("/api/post/split", params)
        return response as string
    }

    public joinChildPosts = async (params: {postID: string; nested: boolean}) => {
        const response = await this.api.post("/api/post/join", params)
        return response as string
    }

    public flipParent = async (postID: string) => {
        const response = await this.api.post("/api/post/flip", {postID})
        return response as string
    }

    public edit = async (params: EditParams) => {
        const response = await this.api.put("/api/post/edit", params)
        return response as string
    }

    public editUnverified = async (params: UnverifiedEditParams) => {
        const response = await this.api.put("/api/post/edit/unverified", params)
        return response as string
    }
}