import {PostType, PostRating, PostSort, PostStyle, CommentSort, CategorySort, 
TagSort, TagType, GroupSort, PostSearch, TagCount, CommentSearch, NoteSearch,
TagCategorySearch, TagSearch, GroupSearch, ThreadSearch, MessageSearch, Post, 
Report} from "./Types"

export type PostSearchParams = {
    query?: string
    type?: PostType
    rating?: PostRating
    style?: PostStyle
    sort?: PostSort
    offset?: number
    limit?: number
    showChildren?: boolean
    withTags?: boolean
    favoriteMode?: boolean
}

export type CommentSearchParams = {
    query?: string
    sort?: CommentSort
    offset?: number
}

export type CategorySearchParams = {
    query?: string
    sort?: CategorySort
    offset?: number
    limit?: number
}

export type TagSearchParams = {
    query?: string
    sort?: TagSort
    type?: TagType
    offset?: number
    limit?: number
}

export type GroupSearchParams = {
    query?: string
    sort?: GroupSort
    rating?: PostRating
    offset?: number
    limit?: number
}

export type MessageSearchParams = {
    query?: string
    hideSystem?: boolean
    sort?: CommentSort
    offset?: number
}

export interface SimilarSearchParams {
    bytes: number[]
    useMD5?: boolean
}

export interface SearchSuggestionsParams {
    query?: string
    type?: TagType
}

export type SidebarTagParams = {
    postIDs?: string[]
    isBanner?: boolean
}