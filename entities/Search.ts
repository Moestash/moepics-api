import {API} from "../api"
import type {PostSearchParams, PostSearch,
CategorySearchParams, TagCategorySearch,
TagSearchParams, TagSearch, CommentSearchParams,
CommentSearch, NoteSearch, GroupSearchParams,
GroupSearch, ThreadSearch, MessageSearchParams,
MessageSearch, Report, SimilarSearchParams, Post} from "../types/Types"

export class SearchRoutes {
    public constructor(private readonly api: API) {}

    public posts = async (params: PostSearchParams) => {
        const response = await this.api.get("/api/search/posts", params)
        return response as PostSearch[]
    }

    public artists = async (params: CategorySearchParams) => {
        const response = await this.api.get("/api/search/artists", params)
        return response as TagCategorySearch[]
    }

    public characters = async (params: CategorySearchParams) => {
        const response = await this.api.get("/api/search/characters", params)
        return response as TagCategorySearch[]
    }

    public series = async (params: CategorySearchParams) => {
        const response = await this.api.get("/api/search/series", params)
        return response as TagCategorySearch[]
    }

    public tags = async (params: TagSearchParams) => {
        const response = await this.api.get("/api/search/tags", params)
        return response as TagSearch[]
    }

    public comments = async (params: CommentSearchParams) => {
        const response = await this.api.get("/api/search/comments", params)
        return response as CommentSearch[]
    }

    public notes = async (params: CommentSearchParams) => {
        const response = await this.api.get("/api/search/notes", params)
        return response as NoteSearch[]
    }

    public groups = async (params: GroupSearchParams) => {
        const response = await this.api.get("/api/search/groups", params)
        return response as GroupSearch[]
    }

    public threads = async (params: CommentSearchParams) => {
        const response = await this.api.get("/api/search/threads", params)
        return response as ThreadSearch[]
    }

    public messages = async (params: MessageSearchParams) => {
        const response = await this.api.get("/api/search/messages", params)
        return response as MessageSearch[]
    }

    public reports = async (params: {offset?: number} | null) => {
        const response = await this.api.get("/api/search/reports", params ?? undefined)
        return response as Report[]
    }

    public similar = async (params: SimilarSearchParams) => {
        const response = await this.api.post("/api/search/similar", params)
        return response as Post[]
    }
}