import {API} from "../api"
import type {UserComment, CommentReportFulfillParams} from "../types/Types"

export class CommentRoutes {
    public constructor(private readonly api: API) {}

    public get = async (commentID: string) => {
        const response = await this.api.get("/api/comment", {commentID})
        return response as UserComment | undefined
    }

    public create = async (comment: string, postID: string) => {
        const response = await this.api.post("/api/comment/create", {comment, postID})
        return response as string
    }

    public report = async (commentID: string, reason: string) => {
        const response = await this.api.post("/api/comment/report", {commentID, reason})
        return response as string
    }

    public fulfillReport = async (params: CommentReportFulfillParams) => {
        const response = await this.api.post("/api/comment/report/fulfill", params)
        return response as string
    }

    public edit = async (comment: string, commentID: string) => {
        const response = await this.api.put("/api/comment/edit", {comment, commentID})
        return response as string
    }

    public delete = async (commentID: string) => {
        const response = await this.api.delete("/api/comment/delete", {commentID})
        return response as string
    }
}