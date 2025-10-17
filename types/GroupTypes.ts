import {Post, PostSearch, PostRating, GroupRequest, GroupDeleteRequest,
GroupEditRequest, GroupHistory} from "./Types"

export interface PostOrdered extends Post {
    order: number
    fake?: boolean
}

export interface PostSearchOrdered extends PostSearch {
    order: number
}

export interface Group {
    groupID: string
    name: string
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    rating: PostRating
    slug: string
    description: string
}

export interface GroupPosts extends Group {
    posts: PostOrdered[]
    postCount: string
}

export interface GroupSearch extends GroupPosts {
    groupCount: number
    fake?: boolean
}

export interface GroupPost {
    mapID: string
    groupID: string
    postID: string
    order: number
}

export interface GroupItem {
    id: number
    image: string
    live: string
    post: PostOrdered
}

export interface GroupParams {
    postID: string
    name: string
    username?: string
    date?: string
}

export interface GroupEditParams {
    slug: string
    name: string
    description: string
    username?: string
    date?: string
    reason?: string | null
    silent?: boolean
}

export interface GroupReorderParams {
    slug: string
    posts: {postID: string, order: number}[]
    silent?: boolean
}

export interface GroupPostDeleteParams {
    postID: string
    name: string
    username?: string
    date?: string
}

export interface GroupRequestParams {
    postID: string
    name: string
    reason: string | null
}

export interface GroupRequestFulfillParams {
    username: string
    slug: string
    postID: string
    accepted: boolean
}

export interface GroupDeleteRequestParams {
    slug: string
    reason: string | null
}

export interface GroupPostDeleteRequestParams {
    removalItems: {slug: string, postID: string}[]
    reason: string | null
}

export interface GroupDeleteRequestFulfillParams {
    username: string
    slug: string
    accepted: boolean
}

export interface GroupPostDeleteRequestFulfillParams {
    username: string
    slug: string
    postID: string
    accepted: boolean
}

export interface GroupEditRequestParams {
    slug: string
    name: string
    description: string
    reason: string | null
}

export interface GroupEditRequestFulfillParams {
    username: string
    slug: string
    accepted: boolean
}

export interface GroupHistoryParams {
    slug?: string
    historyID?: string
    username?: string
    query?: string
    offset?: number
}