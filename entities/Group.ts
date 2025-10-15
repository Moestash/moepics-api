import {API} from "../api"
import type {GroupPosts, Group, GroupRequest,
GroupDeleteRequest, GroupEditRequest, GroupHistory,
GroupHistoryParams, GroupParams, GroupRequestParams,
GroupRequestFulfillParams, GroupDeleteRequestParams,
GroupPostDeleteRequestParams, GroupDeleteRequestFulfillParams,
GroupPostDeleteRequestFulfillParams, GroupEditRequestParams,
GroupEditRequestFulfillParams, GroupEditParams, GroupReorderParams,
GroupPostDeleteParams} from "../types/Types"

export class GroupRoutes {
    public constructor(private readonly api: API) {}

    public get = async (name: string) => {
        const response = await this.api.get("/api/group", {name})
        return response as GroupPosts | undefined
    }

    public groups = async (postID: string) => {
        const response = await this.api.get("/api/groups", {postID})
        return response as GroupPosts[]
    }

    public list = async (groups: string[]) => {
        const response = await this.api.get("/api/groups/list", {groups})
        return response as Group[]
    }

    public requestList = async (params?: {offset?: number}) => {
        const response = await this.api.get("/api/group/request/list", params)
        return response as GroupRequest[]
    }

    public deleteRequestList = async (params?: {offset?: number}) => {
        const response = await this.api.get("/api/group/delete/request/list", params)
        return response as GroupDeleteRequest[]
    }

    public editRequestList = async (params?: {offset?: number}) => {
        const response = await this.api.get("/api/group/edit/request/list", params)
        return response as GroupEditRequest[]
    }

    public history = async (params?: GroupHistoryParams) => {
        const response = await this.api.get("/api/group/history", params)
        return response as GroupHistory[]
    }

    public create = async (params: GroupParams) => {
        const response = await this.api.post("/api/group", params)
        return response as string
    }

    public request = async (params: GroupRequestParams) => {
        const response = await this.api.post("/api/group/request", params)
        return response as string
    }

    public fulfillRequest = async (params: GroupRequestFulfillParams) => {
        const response = await this.api.post("/api/group/request/fulfill", params)
        return response as string
    }

    public deleteRequest = async (params: GroupDeleteRequestParams) => {
        const response = await this.api.post("/api/group/delete/request", params)
        return response as string
    }

    public postDeleteRequest = async (params: GroupPostDeleteRequestParams) => {
        const response = await this.api.post("/api/group/post/delete/request", params)
        return response as string
    }

    public fulfillDeleteRequest = async (params: GroupDeleteRequestFulfillParams) => {
        const response = await this.api.post("/api/group/delete/request/fulfill", params)
        return response as string
    }

    public fulfillPostDeleteRequest = async (params: GroupPostDeleteRequestFulfillParams) => {
        const response = await this.api.post("/api/group/post/delete/request/fulfill", params)
        return response as string
    }

    public editRequest = async (params: GroupEditRequestParams) => {
        const response = await this.api.post("/api/group/edit/request", params)
        return response as string
    }

    public fulfillEditRequest = async (params: GroupEditRequestFulfillParams) => {
        const response = await this.api.post("/api/group/edit/request/fulfill", params)
        return response as string
    }

    public edit = async (params: GroupEditParams) => {
        const response = await this.api.put("/api/group/edit", params)
        return response as string
    }

    public reorder = async (params: GroupReorderParams) => {
        const response = await this.api.put("/api/group/reorder", params)
        return response as string
    }

    public delete = async (slug: string) => {
        const response = await this.api.delete("/api/group/delete", {slug})
        return response as string
    }

    public deletePost = async (params: GroupPostDeleteParams) => {
        const response = await this.api.delete("/api/group/post/delete", params)
        return response as string
    }

    public deleteHistory = async (slug: string, historyID: string) => {
        const response = await this.api.delete("/api/group/history/delete", {slug, historyID})
        return response as string
    }
}