import {UserRole, CommentSort} from "./Types"

export interface Thread {
    threadID: string
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    sticky: boolean
    locked: boolean
    title: string
    content: string
    r18: boolean | null
    read?: boolean
    threadCount: string
}

export interface ThreadUser extends Thread {
    role: UserRole
    image: string | null
    imagePost: string | null
    imageHash: string | null
    banned: boolean | null 
    postCount: number
    joinDate: string
}

export interface ThreadSearch extends Thread {
    fake?: boolean
}

export interface ThreadReply {
    replyID: string
    threadID: string
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    content: string
    r18: boolean
    role: UserRole
    image: string | null
    imagePost: string | null
    imageHash: string | null
    banned: boolean | null
    replyCount: string
    postCount: number
    joinDate: string
    fake?: boolean
}

export interface ThreadRead {
    readID: string
    threadID: string
    username: string
    read: boolean
}

export interface ForumPostSearch {
    id: string
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    title: string
    content: string
    r18: boolean | null
    type: "thread" | "reply"
    role: UserRole
    image: string | null
    imagePost: string | null
    imageHash: string | null
    banned: boolean | null
    thread: Thread | null
    postCount: string
    fake?: boolean
}

export interface ThreadCreateParams {
    title: string
    content: string
    r18: boolean
}

export interface ThreadEditParams {
    threadID: string
    title: string
    content: string
    r18: boolean
}

export interface ThreadReplyParams {
    threadID: string
    content: string
    r18: boolean
}

export interface ReplyEditParams {
    replyID: string
    content: string
    r18: boolean
}

export interface ThreadReportFulfillParams {
    reportID: string 
    reporter: string 
    username: string 
    id: string 
    accepted: boolean
}