import {API} from "../api"
import type {Tag, TagCount, Alias,
TagDeleteRequest, AliasRequest,
TagEditRequest, TagHistory, TagHistoryParams,
AliasHistorySearch, AliasToParams, TagUpdateColumns,
TagDeleteRequestFulfillParams, AliasToRequestParams,
AliasToRequestFulfillParams, TagEditRequestFulfillParams,
TagEditParams, AliasHistoryType, TagType} from "../types/Types"

export class TagRoutes {
    public constructor(private readonly api: API) {}

    public get = async (tag: string) => {
        const response = await this.api.get("/api/tag", {tag})
        return response as Tag | undefined
    }

    public related = async (tag: string) => {
        const response = await this.api.get("/api/tag/related", {tag})
        return response as string[]
    }

    public counts = async (tags: string[]) => {
        const response = await this.api.get("/api/tag/counts", {tags})
        return response as TagCount[]
    }

    public list = async (tags: string[]) => {
        const response = await this.api.get("/api/tag/list", {tags})
        return response as Tag[]
    }

    public aliases = async (aliases: string[]) => {
        const response = await this.api.get("/api/tag/aliases", {aliases})
        return response as Alias[]
    }

    public listUnverified = async (tags: string[]) => {
        const response = await this.api.get("/api/tag/list/unverified", {tags})
        return response as Tag[]
    }

    public deleteRequests = async (offset?: number | null) => {
        const response = await this.api.get("/api/tag/delete/request/list", {offset})
        return response as TagDeleteRequest[]
    }

    public aliasRequests = async (offset?: number | null) => {
        const response = await this.api.get("/api/tag/aliasto/request/list", {offset})
        return response as AliasRequest[]
    }

    public editRequests = async (offset?: number | null) => {
        const response = await this.api.get("/api/tag/edit/request/list", {offset})
        return response as TagEditRequest[]
    }

    public history = async (params: TagHistoryParams | null) => {
        const response = await this.api.get("/api/tag/history", params ?? undefined)
        return response as TagHistory[]
    }

    public aliasHistory = async (params: {offset?: number; query?: string} | null) => {
        const response = await this.api.get("/api/alias/history", params ?? undefined)
        return response as AliasHistorySearch[]
    }

    public takedown = async (tag: string) => {
        const response = await this.api.post("/api/tag/takedown", {tag})
        return response as string
    }

    public aliasTo = async (params: AliasToParams) => {
        const response = await this.api.post("/api/tag/aliasto", params)
        return response as string
    }

    public undoAliasTo = async (historyID: string) => {
        const response = await this.api.post("/api/tag/aliasto/undo", {historyID})
        return response as string
    }

    public undoImplication = async (historyID: string) => {
        const response = await this.api.post("/api/tag/implication/undo", {historyID})
        return response as string
    }

    public redoImplication = async (historyID: string) => {
        const response = await this.api.post("/api/tag/implication/redo", {historyID})
        return response as string
    }

    public deleteRequest = async (tag: string, reason: string) => {
        const response = await this.api.post("/api/tag/delete/request", {tag, reason})
        return response as string
    }

    public fulfillDeleteRequest = async (params: TagDeleteRequestFulfillParams) => {
        const response = await this.api.post("/api/tag/delete/request/fulfill", params)
        return response as string
    }

    public aliasToRequest = async (params: AliasToRequestParams) => {
        const response = await this.api.post("/api/tag/aliasto/request", params)
        return response as string
    }

    public fulfillAliasToRequest = async (params: AliasToRequestFulfillParams) => {
        const response = await this.api.post("/api/tag/aliasto/request/fulfill", params)
        return response as string
    }

    public editRequest = async (params: any) => {
        const response = await this.api.post("/api/tag/edit/request", params)
        return response as string
    }

    public fulfillEditRequest = async (params: TagEditRequestFulfillParams) => {
        const response = await this.api.post("/api/tag/edit/request/fulfill", params)
        return response as string
    }

    public massImply = async (wildcard: string, implyTo: string) => {
        const response = await this.api.post("/api/tag/massimply", {wildcard, implyTo})
        return response as string
    }

    public edit = async (params: TagEditParams) => {
        const response = await this.api.put("/api/tag/edit", params)
        return response as string
    }

    public delete = async (tag: string) => {
        const response = await this.api.delete("/api/tag/delete", {tag})
        return response as string
    }

    public deleteHistory = async (tag: string, historyID: string) => {
        const response = await this.api.delete("/api/tag/history/delete", {tag, historyID})
        return response as string
    }

    public deleteAliasHistory = async (type: AliasHistoryType, historyID: string) => {
        const response = await this.api.delete("/api/alias/history/delete", {type, historyID})
        return response as string
    }

    public update = async (tag: string, column: TagUpdateColumns, value: any) => {
        const response = await this.api.put("/api/tag/update", {tag, column, value})
        return response as string
    }

    public insert = async (tag: string, type: TagType, description?: string) => {
        const response = await this.api.put("/api/tag/insert", {tag, type, description})
        return response as string
    }
}