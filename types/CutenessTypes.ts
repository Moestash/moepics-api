import {Post} from "./Types"

export interface Cuteness {
    cutenessID: string
    postID: string
    username: string
    cuteness: number
    cutenessDate: string
    post: Post
}