import {PostType, PostRating, PostStyle, MiniTagGroup} from "./Types"

export interface SourceData {
    title: string | null
    englishTitle: string | null
    artist: string | null
    posted: string | null
    source: string | null
    commentary: string | null
    englishCommentary: string | null
    bookmarks: number | null
    buyLink: string | null
    mirrors: string | null
}

export interface UploadTag {
    tag?: string
    description?: string
    image?: string
    ext?: string
    bytes?: number[]
}

export interface UploadImage {
    name: string
    link: string
    originalLink: string
    ext: string
    size: number
    width: number
    height: number
    bytes: number[]
    thumbnail: string
    thumbnailExt: string
    duration?: number
    groupName?: string
    parentID?: string
}

export interface UploadParams {
    images: UploadImage[]
    upscaledImages: UploadImage[]
    type: PostType
    rating: PostRating
    style: PostStyle
    source: SourceData
    parentID?: string | null
    groupName?: string | null
    artists: UploadTag[]
    characters: UploadTag[]
    series: UploadTag[]
    tags: string[]
    tagGroups: MiniTagGroup[]
    newTags: UploadTag[]
    unverifiedID?: string
    noImageUpdate?: boolean
}

export interface EditParams extends UploadParams {
    postID: string
    preserveChildren?: boolean
    updatedDate?: string
    reason?: string | null
    silent?: boolean
}

export interface ApproveParams {
    postID: string
    reason?: string | null
    noImageUpdate?: boolean
}

export interface UnverifiedUploadParams extends Omit<UploadParams, "unverifiedID" | "noImageUpdate"> {
    duplicates: boolean
}

export interface UnverifiedEditParams extends Omit<UploadParams, "noImageUpdate"> {
    postID: string
    reason?: string
}