import {UserRole, Post, UnverifiedPost, NoteHistory} from "./Types"

export interface Note {
    id?: number
    noteID: string
    postID: string
    order: number
    updater: string
    updatedDate: string
    transcript: string
    translation: string
    x: number
    y: number
    width: number
    height: number
    rotation: number
    imageWidth: number
    imageHeight: number
    imageHash: string
    overlay: boolean
    fontSize: number
    backgroundColor: string
    textColor: string
    fontFamily: string
    backgroundAlpha: number
    bold: boolean
    italic: boolean
    strokeColor: string
    strokeWidth: number
    breakWord: boolean
    borderRadius: number
    character: boolean
    characterTag: string
}

export interface BubbleData {
    id?: number
    x: number
    y: number
    width: number
    height: number
    transcript?: string
    translation?: string
    fontFamily?: string
    fontSize?: number
    bold?: boolean
    italic?: boolean
    character?: boolean
    characterTag?: string
}

export interface NoteSearch {
    noteID: string
    postID: string
    updater: string
    updatedDate: string
    order: number
    notes: Note[]
    noteCount: number
    post: Post
    image: string | null
    imageHash: string | null
    imagePost: string | null
    role: UserRole
    banned: boolean | null
    row: string
    fake?: boolean
}

export interface UnverifiedNote extends Note {
    originalID: string
    addedEntries: string[]
    removedEntries: string[]
    reason: string | null
}

export interface UnverifiedNoteSearch extends NoteSearch {
    notes: UnverifiedNote[]
    post: UnverifiedPost
    originalID: string
    addedEntries: string[]
    removedEntries: string[]
    reason: string | null
}

export interface NoteSaveParams {
    postID: string
    order: number
    data: Note[]
    reason: string
}

export interface NoteEditParams {
    postID: string
    order: number
    data: Note[]
    silent?: boolean
}

export interface NoteApproveParams {
    postID: string
    originalID: string
    order: number
    username: string
    data: Note[]
}

export interface NoteHistoryParams {
    postID?: string
    order?: number
    historyID?: string
    username?: string
    query?: string
    offset?: number
}

export interface NoteHistoryDeleteParams {
    postID: string
    order: number
    historyID: string
}