import {UserRole, Post} from "./Types"

export interface UserComment {
    commentID: string
    postID: string
    username: string
    comment: string
    postDate: string
    editor: string
    editedDate: string | null
    image: string | null
    imagePost: string | null
    imageHash: string | null
    role: UserRole
    banned: boolean | null
}

export interface CommentSearch extends UserComment {
    post: Post
    commentCount: number
    fake?: boolean
}

export interface CommentReportFulfillParams {
    reportID: string 
    reporter: string 
    username: string 
    id: string 
    accepted: boolean
}