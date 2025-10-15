import {API} from "../api"
import type {ThreadUser, ThreadReply,
ThreadCreateParams, ThreadReplyParams,
ThreadEditParams, ReplyEditParams, 
ThreadReportFulfillParams} from "../types/Types"

export class ThreadRoutes {
    public constructor(private readonly api: API) {}

    public get = async (threadID: string) => {
        const response = await this.api.get("/api/thread", {threadID})
        return response as ThreadUser | undefined
    }

    public replies = async (threadID: string, offset?: number) => {
        const response = await this.api.get("/api/thread/replies", {threadID, offset})
        return response as ThreadReply[]
    }

    public getReply = async (replyID: string) => {
        const response = await this.api.get("/api/reply", {replyID})
        return response as ThreadReply | undefined
    }

    public create = async (params: ThreadCreateParams) => {
        const response = await this.api.post("/api/thread/create", params)
        return response as string
    }

    public sticky = async (threadID: string) => {
        const response = await this.api.post("/api/thread/sticky", {threadID})
        return response as string
    }

    public lock = async (threadID: string) => {
        const response = await this.api.post("/api/thread/lock", {threadID})
        return response as string
    }

    public reply = async (params: ThreadReplyParams) => {
        const response = await this.api.post("/api/thread/reply", params)
        return response as string
    }

    public reportThread = async (threadID: string, reason: string) => {
        const response = await this.api.post("/api/thread/report", {threadID, reason})
        return response as string
    }

    public reportReply = async (replyID: string, reason: string) => {
        const response = await this.api.post("/api/reply/report", {replyID, reason})
        return response as string
    }

    public fulfillThreadReport = async (params: ThreadReportFulfillParams) => {
        const response = await this.api.post("/api/thread/report/fulfill", params)
        return response as string
    }

    public fulfillReplyReport = async (params: ThreadReportFulfillParams) => {
        const response = await this.api.post("/api/reply/report/fulfill", params)
        return response as string
    }

    public markRead = async (threadID: string, forceRead?: boolean) => {
        const response = await this.api.post("/api/thread/read", {threadID, forceRead})
        return response as string
    }

    public editThread = async (params: ThreadEditParams) => {
        const response = await this.api.put("/api/thread/edit", params)
        return response as string
    }

    public editReply = async (params: ReplyEditParams) => {
        const response = await this.api.put("/api/reply/edit", params)
        return response as string
    }

    public deleteThread = async (threadID: string) => {
        const response = await this.api.delete("/api/thread/delete", {threadID})
        return response as string
    }

    public deleteReply = async (threadID: string, replyID: string) => {
        const response = await this.api.delete("/api/reply/delete", {threadID, replyID})
        return response as string
    }
}