import {PostType, PostRating, PostStyle, PostChanges, MiniTag, PostDeleteRequest, PostHistory,
ImageFormat, Upscaler, SourceData, UserComment, Redirect, MiniTagGroup} from "./Types"

export interface PostMirrors {
    pixiv?: string
    soundcloud?: string
    sketchfab?: string
    twitter?: string
    deviantart?: string
    artstation?: string
    danbooru?: string
    gelbooru?: string
    safebooru?: string
    yandere?: string
    konachan?: string
    zerochan?: string
    eshuushuu?: string
    animepictures?: string
    youtube?: string
    bandcamp?: string
}

export interface Image {
    imageID: string
    postID: string
    type: PostType
    order: number
    filename: string
    upscaledFilename: string
    width: number
    height: number
    upscaledWidth: number
    upscaledHeight: number
    size: number
    upscaledSize: number
    duration: number
    thumbnail: string
    hash: string
    pixelHash: string
}

export interface Post {
    postID: string
    type: PostType
    rating: PostRating
    style: PostStyle
    parentID: string | null
    uploader: string
    uploadDate: string
    updater: string
    updatedDate: string
    title: string
    englishTitle: string
    slug: string
    artist: string
    posted: string
    source: string
    commentary: string
    englishCommentary: string
    mirrors: PostMirrors | null
    bookmarks: number
    buyLink: string | null
    approver: string
    approveDate: string
    hasOriginal: boolean
    hasUpscaled: boolean
    hidden: boolean | null
    locked: boolean | null
    private: boolean | null
    images: Image[]
    upscaledImages: undefined
    deleted: boolean | null
    deletionDate: string | null
    postCount?: string
    fake?: boolean
}

export interface PostCuteness extends Post {
    cuteness: string
}

export interface PostTagged extends Post {
    tags: string[]
}

export interface PostFull extends Post {
    tags: string[]
    tagGroups: MiniTagGroup[]
    favoriteCount: string
    cuteness: string
}

export interface PostSearch extends Post {
    tags: string[]
    tagGroups: MiniTagGroup[]
    artists: string[]
    characters: string[]
    series: string[]
    fileSize: number
    aspectRatio: number
    variationCount: string
    favoriteCount: string
    cuteness: string
    hasChildren: boolean
    isGrouped: boolean
    favorited: boolean
    favgrouped: boolean
    postCount: string
}

export interface UnverifiedPost extends Post {
    originalID: string
    duplicates: boolean | null
    tags: string[]
    tagGroups: MiniTagGroup[]
    newTags: string[] | null
    addedTags: string[] | null
    removedTags: string[] | null
    addedTagGroups: string[] | null
    removedTagGroups: string[] | null
    imageChanged: boolean | null
    changes: PostChanges
    reason: string | null
    isNote: boolean
    appealed: boolean | null
    appealer: string | null
    appealReason: string | null
    postCount: string
}

export interface DeletedPost extends Post {
    historyCount: number
}

export interface ChildPost {
    childID: string
    postID: string
    parentID: string
    post: PostCuteness
}

export interface PostDeleteRequestFulfillParams {
    username: string
    postID: string
    accepted: boolean
}

export interface PostHistoryParams {
    postID?: string
    historyID?: string
    username?: string
    query?: string
    offset?: number
}

export interface PostCompressParams {
    postID: string 
    quality: number 
    format: ImageFormat 
    maxDimension: number 
    maxUpscaledDimension: number 
    original: boolean 
    upscaled: boolean
}

export interface PostUpscaleParams {
    postID: string 
    upscaler: Upscaler 
    scaleFactor: number
    compressJPG: boolean
}

export interface PostQuickEditParams {
    postID: string
    unverified?: boolean
    type: PostType
    rating: PostRating
    style: PostStyle
    source?: SourceData
    parentID?: string | null
    artists?: string[]
    characters?: string[]
    series?: string[]
    tags?: string[]
    tagGroups?: {name: string, tags: string[]}[]
    reason?: string | null
    silent?: boolean
}

export interface PostQuickEditUnverifiedParams extends Omit<PostQuickEditParams, "unverified" | "silent"> {}

export interface PostMetadata {
    format: string
    width?: number
    height?: number
    size?: number
    colorSpace?: string
    colorChannels?: number
    progressive?: boolean
    alpha?: boolean
    dpi?: number
    bitdepth?: number
    chromaSubsampling?: string
    frames?: number
    duration?: number
    bitrate?: number
    audioChannels?: number
    sampleRate?: number
    framerate?: number
    encoder?: string
    scanType?: string
    colorMatrix?: string
}

export interface ThumbnailUpdate {
    order: number
    thumbnail: string
    thumbnailExt: string
}