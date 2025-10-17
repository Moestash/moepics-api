import {PostRating, Post, PostOrdered, PostSearchOrdered, TagCount} from "./Types"

export interface Favorite {
    favoriteID: string
    postID: string
    username: string
    favoriteDate: string
    post: Post
}

export interface TagFavorite {
    favoriteID: string
    tag: string
    username: string
    favoriteDate: string
}

export interface Favgroup {
    favgroupID: string
    username: string
    slug: string
    name: string
    private: boolean
    createDate: string
    rating: PostRating
    posts: PostOrdered[]
    postCount: string
}

export interface FavgroupSearch extends Favgroup {
    posts: PostSearchOrdered[]
}

export interface FavgroupUpdateParams {
    postID: string
    name: string
    isPrivate: boolean
}

export interface FavgroupEditParams {
    key: string
    name: string
    isPrivate: boolean
}

export interface FavgroupReorderParams {
    name: string
    posts: {postID: string, order: number}[]
}