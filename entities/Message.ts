import {API} from "../api"
import type {MessageUser, MessageUserReply,
MessageCreateParams, MessageReplyParams,
MessageForwardParams, MessageEditParams,
MessageReplyEditParams} from "../types/Types"

export class MessageRoutes {
    public constructor(private readonly api: API) {}

    public get = async (messageID: string) => {
        const response = await this.api.get("/api/message", {messageID})
        return response as MessageUser | undefined
    }

    public replies = async (messageID: string, offset?: number) => {
        const response = await this.api.get("/api/message/replies", {messageID, offset})
        return response as MessageUserReply[]
    }

    public notifications = async () => {
        const response = await this.api.get("/api/notifications", undefined)
        return response as string
    }

    public create = async (params: MessageCreateParams) => {
        const response = await this.api.post("/api/message/create", params)
        return response as string
    }

    public reply = async (params: MessageReplyParams) => {
        const response = await this.api.post("/api/message/reply", params)
        return response as string
    }

    public softDelete = async (messageID: string) => {
        const response = await this.api.post("/api/message/softdelete", {messageID})
        return response as string
    }

    public read = async (messageID: string, forceRead?: boolean) => {
        const response = await this.api.post("/api/message/read", {messageID, forceRead})
        return response as string
    }

    public bulkRead = async (readStatus: boolean) => {
        const response = await this.api.post("/api/message/bulkread", {readStatus})
        return response as string
    }

    public forward = async (params: MessageForwardParams) => {
        const response = await this.api.post("/api/message/forward", params)
        return response as string
    }

    public edit = async (params: MessageEditParams) => {
        const response = await this.api.put("/api/message/edit", params)
        return response as string
    }

    public editReply = async (params: MessageReplyEditParams) => {
        const response = await this.api.put("/api/message/reply/edit", params)
        return response as string
    }

    public delete = async (messageID: string) => {
        const response = await this.api.delete("/api/message/delete", {messageID})
        return response as string
    }

    public deleteReply = async (messageID: string, replyID: string) => {
        const response = await this.api.delete("/api/message/reply/delete", {messageID, replyID})
        return response as string
    }
}