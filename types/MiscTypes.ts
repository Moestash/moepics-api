import {PixivIllust} from "pixiv.ts"
import {DeviationRSSExtended} from "deviantart.ts"
import {Banner, PostRating, PostStyle, PostType, UploadImage, UploadTag} from "./Types"

export interface GIFFrame {
    frame: HTMLCanvasElement
    delay: number
}

export interface SaucenaoResponse {
    header: {
        similarity: string
        thumbnail: string
        index_id: number
        index_name: string
        dupes: number
        hidden: number
    },
    data: {
        ext_urls: string[]
        title?: string
        pixiv_id?: number
        member_name?: string
        member_id?: number
        da_id?: string
        author_name?: string
        author_url?: string
        danbooru_id?: number
        yandere_id?: number
        gelbooru_id?: number
        konachan_id?: number
        creator?: string
        material?: string
        characters?: string
        source?: string
        eng_name?: string
        jp_name?: string
        as_project?: string
        published?: string
        service?: string
        service_name?: string
        id?: string
        user_id?: string
        user_name?: string
        created_at?: string
        tweet_id?: string
        twitter_user_id?: string
        twitter_user_handle?: string
        mal_id?: string
    }
}

export type PixivResponse = PixivIllust & {user: {twitter: string}}

export interface Attachment {
    filename: string
    content: Buffer
}

export interface FileUpload {
    name: string
    bytes: number[]
}

export interface ContactParams {
    email: string
    subject: string 
    message: string 
    files?: FileUpload[]
}

export interface CopyrightParams {
    name: string 
    email: string 
    artistTag: string 
    socialMediaLinks: string 
    postLinks: string 
    removeAllRequest: boolean 
    proofLinks?: string
    files?: {name: string, bytes: number[]}[]
}

export interface WDTaggerResponse {
    tags: string[]
    characters: string[]
}

export interface OCRResponse {
    transcript: string
    translation: string
    x: number
    y: number
    width: number
    height: number
    imageWidth: number 
    imageHeight: number
}

export interface CoinbaseEvent {
    id: string
    type: string
    resource: string
    api_version: string
    created_at: string
    data: {
        id: string
        code: string
        metadata: {
            username: string
            email: string
        }
    }
}

export interface SourceLookupParams {
    current: UploadImage
    rating: PostRating
}

export interface SourceLookup {
    rating: PostRating
    artists: UploadTag[]
    danbooruLink: string
    artistIcon: string
    source: {
        title: string
        englishTitle: string
        artist: string
        source: string
        commentary: string
        englishCommentary: string
        bookmarks: string
        posted: string
        mirrors: string
    }
}

export interface TagLookupParams {
    current: UploadImage
    type: PostType
    rating: PostRating
    style: PostStyle
    hasUpscaled: boolean
}

export interface TagLookup {
    type: PostType
    rating: PostRating
    style: PostStyle
    artists: UploadTag[]
    characters: UploadTag[]
    series: UploadTag[]
    meta: string[]
    tags: string[]
    newTags: UploadTag[]
    danbooruLink: string
}

export interface PixelateOptions {
    isAnimation?: boolean
    isVideo?: boolean
    directWidth?: boolean
    clientWidth?: number
    clientHeight?: number
}

export interface SplatterOptions {
    isAnimation?: boolean
    isVideo?: boolean
    lineMultiplier?: number
    minOpacity?: number
    maxOpacity?: number
    minLineWidth?: number
    maxLineWidth?: number
    minLineLength?: number
    maxLineLength?: number
    maxAngle?: number
    imageExpand?: boolean
    clientWidth?: number
    clientHeight?: number
}