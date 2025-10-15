import {API} from "../api"
import type {Favorite, Favgroup, FavgroupSearch,
TagFavorite, TagCount, FavgroupUpdateParams,
FavgroupEditParams, FavgroupReorderParams} from "../types/Types"

export class FavoriteRoutes {
    public constructor(private readonly api: API) {}

    public get = async (postID: string) => {
        const response = await this.api.get("/api/favorite", {postID})
        return response as Favorite | undefined
    }

    public favgroups = async (postID: string) => {
        const response = await this.api.get("/api/favgroups", {postID})
        return response as Favgroup[]
    }

    public favgroup = async (username: string, name: string) => {
        const response = await this.api.get("/api/favgroup", {username, name})
        return response as FavgroupSearch | undefined
    }

    public tagFavorite = async (tag: string) => {
        const response = await this.api.get("/api/tagfavorite", {tag})
        return response as TagFavorite | undefined
    }

    public tagFavorites = async (username?: string) => {
        const response = await this.api.get("/api/tagfavorites", username ? {username} : undefined)
        return response as TagCount[]
    }

    public toggle = async (postID: string) => {
        const response = await this.api.post("/api/favorite/toggle", {postID})
        return response as string
    }

    public update = async (postID: string, favorited: boolean) => {
        const response = await this.api.post("/api/favorite/update", {postID, favorited})
        return response as string
    }

    public updateFavgroup = async (params: FavgroupUpdateParams) => {
        const response = await this.api.post("/api/favgroup/update", params)
        return response as string
    }

    public toggleTagFavorite = async (tag: string) => {
        const response = await this.api.post("/api/tagfavorite/toggle", {tag})
        return response as string
    }

    public editFavgroup = async (params: FavgroupEditParams) => {
        const response = await this.api.put("/api/favgroup/edit", params)
        return response as string
    }

    public reorderFavgroups = async (params: FavgroupReorderParams) => {
        const response = await this.api.put("/api/favgroup/reorder", params)
        return response as string
    }

    public deleteFavgroupPost = async (postID: string, name: string) => {
        const response = await this.api.delete("/api/favgroup/post/delete", {postID, name})
        return response as string
    }

    public deleteFavgroup = async (name: string) => {
        const response = await this.api.delete("/api/favgroup/delete", {name})
        return response as string
    }

    public deleteTagFavorites = async () => {
        const response = await this.api.delete("/api/tagfavorites/delete", undefined)
        return response as string
    }
}