import {API} from "../api"
import type {Note, UnverifiedNote,
UnverifiedNoteSearch, NoteHistory,
NoteHistoryParams, NoteSaveParams,
NoteApproveParams, NoteEditParams,
NoteHistoryDeleteParams, NoteUpdateColumns} from "../types/Types"

export class NoteRoutes {
    public constructor(private readonly api: API) {}

    public get = async (postID: string) => {
        const response = await this.api.get("/api/notes", {postID})
        return response as Note[]
    }

    public getUnverified = async (postID: string) => {
        const response = await this.api.get("/api/notes/unverified", {postID})
        return response as UnverifiedNote[]
    }

    public listUnverified = async (offset?: number) => {
        const response = await this.api.get("/api/note/list/unverified", {offset})
        return response as UnverifiedNoteSearch[]
    }

    public history = async (params: NoteHistoryParams | null) => {
        const response = await this.api.get("/api/note/history", params ?? undefined)
        return response as NoteHistory[]
    }

    public save = async (params: NoteSaveParams) => {
        const response = await this.api.post("/api/note/save", params)
        return response as string
    }

    public saveRequest = async (params: NoteSaveParams) => {
        const response = await this.api.post("/api/note/save/request", params)
        return response as string
    }

    public approve = async (params: NoteApproveParams) => {
        const response = await this.api.post("/api/note/approve", params)
        return response as string
    }

    public reject = async (params: NoteApproveParams) => {
        const response = await this.api.post("/api/note/reject", params)
        return response as string
    }

    public edit = async (params: NoteEditParams) => {
        const response = await this.api.put("/api/note/save", params)
        return response as string
    }

    public saveUnverified = async (params: NoteSaveParams) => {
        const response = await this.api.put("/api/note/save/unverified", params)
        return response as string
    }

    public deleteHistory = async (params: NoteHistoryDeleteParams) => {
        const response = await this.api.delete("/api/note/history/delete", params)
        return response as string
    }

    public update = async (noteID: string, column: NoteUpdateColumns, value: any) => {
        const response = await this.api.put("/api/note/update", {noteID, column, value})
        return response as string
    }
}