import {UserRole} from "./Types"

export interface Recipient {
    recipientID: string
    messageID: string
    recipient: string | null
    read: boolean
    delete: boolean
}

export interface Message {
    messageID: string
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    title: string
    content: string
    read: boolean | null
    delete: boolean | null
    r18: boolean | null
    recipients: Array<string | null>
    recipientData: Recipient[]
    role: UserRole
    image: string | null
    imagePost: string | null
    imageHash: string | null
    banned: boolean | null 
}

export interface MessageUser extends Message {
    role: UserRole
    image: string | null
    imagePost: string | null
    imageHash: string | null
    banned: boolean | null 
}

export interface MessageSearch extends Message {
    messageCount: number
    fake?: boolean
}

export interface MessageUserReply {
    replyID: string
    messageID: string
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
    fake?: boolean
}

export interface MessageCreateParams {
    title: string
    content: string
    r18: boolean
    recipients: string[]
}

export interface MessageEditParams {
    messageID: string
    title: string
    content: string
    r18: boolean
}

export interface MessageReplyParams {
    messageID: string
    content: string
    r18: boolean
}

export interface MessageReplyEditParams {
    replyID: string
    content: string
    r18: boolean
}

export interface MessageForwardParams {
    messageID: string
    recipients: string[]
}