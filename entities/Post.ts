import {API} from "../api"
import type {PostFull, MiniTag, UserComment,
ChildPost, UnverifiedPost, DeletedPost,
PostDeleteRequest, PostHistory, PostHistoryParams,
Redirect, PostDeleteRequestFulfillParams,
PostCompressParams, PostUpscaleParams,
PostMetadata, PostQuickEditParams, PostUpdateColumns,
PostQuickEditUnverifiedParams, ThumbnailUpdate,
MiniTagGroup} from "../types/Types"

export class PostRoutes {
    public constructor(private readonly api: API) {}

    public get = async (postID: string) => {
        const response = await this.api.get("/api/post", {postID})
        return response as PostFull | undefined
    }

    public getMultiple = async (postIDs: string[]) => {
        const response = await this.api.get("/api/posts", {postIDs})
        return response as PostFull[]
    }

    public tags = async (postID: string) => {
        const response = await this.api.get("/api/post/tags", {postID})
        return response as MiniTag[]
    }

    public comments = async (postID: string) => {
        const response = await this.api.get("/api/post/comments", {postID})
        return response as UserComment[]
    }

    public children = async (postID: string) => {
        const response = await this.api.get("/api/post/children", {postID})
        return response as ChildPost[]
    }

    public parent = async (postID: string) => {
        const response = await this.api.get("/api/post/parent", {postID})
        return response as ChildPost | undefined
    }

    public unverified = async (postID: string) => {
        const response = await this.api.get("/api/post/unverified", {postID})
        return response as UnverifiedPost | undefined
    }

    public listUnverified = async (offset?: number | null) => {
        const response = await this.api.get("/api/post/list/unverified", {offset})
        return response as UnverifiedPost[]
    }

    public getDeleted = async (params: {query?: string; offset?: number } | null) => {
        const response = await this.api.get("/api/post/deleted", params ?? undefined)
        return response as DeletedPost[]
    }

    public getDeletedUnverified = async (offset?: number | null) => {
        const response = await this.api.get("/api/post/deleted/unverified", {offset})
        return response as UnverifiedPost[]
    }

    public deleteRequests = async (offset?: number | null) => {
        const response = await this.api.get("/api/post/delete/request/list", {offset})
        return response as PostDeleteRequest[]
    }

    public history = async (params: PostHistoryParams | null) => {
        const response = await this.api.get("/api/post/history", params ?? undefined)
        return response as PostHistory[]
    }

    public pending = async () => {
        const response = await this.api.get("/api/post/pending", undefined)
        return response as UnverifiedPost[]
    }

    public rejected = async () => {
        const response = await this.api.get("/api/post/rejected", undefined)
        return response as UnverifiedPost[]
    }

    public redirects = async (postID: string) => {
        const response = await this.api.get("/api/post/redirects", {postID})
        return response as Redirect[]
    }

    public takedown = async (postID: string) => {
        const response = await this.api.post("/api/post/takedown", {postID})
        return response as string
    }

    public lock = async (postID: string) => {
        const response = await this.api.post("/api/post/lock", {postID})
        return response as string
    }

    public private = async (postID: string) => {
        const response = await this.api.post("/api/post/private", {postID})
        return response as string
    }

    public deleteRequest = async (postID: string, reason: string) => {
        const response = await this.api.post("/api/post/delete/request", {postID, reason})
        return response as string
    }

    public fulfillDeleteRequest = async (params: PostDeleteRequestFulfillParams) => {
        const response = await this.api.post("/api/post/delete/request/fulfill", params)
        return response as string
    }

    public view = async (postID: string) => {
        const response = await this.api.post("/api/post/view", {postID})
        return response as string
    }

    public compress = async (params: PostCompressParams) => {
        const response = await this.api.post("/api/post/compress", params)
        return response as string
    }

    public upscale = async (params: PostUpscaleParams) => {
        const response = await this.api.post("/api/post/upscale", params)
        return response as string
    }

    public appeal = async (postID: string, reason: string) => {
        const response = await this.api.post("/api/post/appeal", {postID, reason})
        return response as string
    }

    public metadata = async (postID: string, order: number) => {
        const response = await this.api.post("/api/post/metadata", {postID, order})
        return response as PostMetadata
    }

    public quickEdit = async (params: PostQuickEditParams) => {
        const response = await this.api.put("/api/post/quickedit", params)
        return response as string
    }

    public quickEditUnverified = async (params: PostQuickEditUnverifiedParams) => {
        const response = await this.api.put("/api/post/quickedit/unverified", params)
        return response as string
    }

    public undelete = async (postID: string) => {
        const response = await this.api.put("/api/post/undelete", {postID})
        return response as string
    }

    public undeleteUnverified = async (postID: string) => {
        const response = await this.api.put("/api/post/undelete/unverified", {postID})
        return response as string
    }

    public updateThumbnails = async (params: {postID: string; thumbnails: ThumbnailUpdate[]; unverified?: boolean}) => {
        const response = await this.api.put("/api/post/thumbnail", params)
        return response as string
    }

    public regenerateThumbnails = async (postID: string) => {
        const response = await this.api.post("/api/thumbnail/regenerate", {postID})
        return response as string
    }

    public delete = async (postID: string) => {
        const response = await this.api.delete("/api/post/delete", {postID})
        return response as string
    }

    public deleteUnverified = async (postID: string) => {
        const response = await this.api.delete("/api/post/delete/unverified", {postID})
        return response as string
    }

    public deleteHistory = async (postID: string, historyID: string) => {
        const response = await this.api.delete("/api/post/history/delete", {postID, historyID})
        return response as string
    }

    public emptyBin = async () => {
        const response = await this.api.delete("/api/post/emptybin", undefined)
        return response as string
    }

    public update = async (postID: string, column: PostUpdateColumns, value: any) => {
        const response = await this.api.put("/api/post/update", {postID, column, value})
        return response as string
    }

    public addTags = async (postID: string, tags?: string[], tagGroups?: MiniTagGroup[]) => {
        const response = await this.api.put("/api/post/addtags", {postID, tags, tagGroups})
        return response as string
    }

    public removeTags = async (postID: string, tags?: string[], tagGroups?: MiniTagGroup[]) => {
        const response = await this.api.put("/api/post/removetags", {postID, tags, tagGroups})
        return response as string
    }
}