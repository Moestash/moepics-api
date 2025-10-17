import {TagType, Post, AliasHistoryType, TagDeleteRequest, AliasRequest, TagEditRequest,
TagHistory} from "./Types"

export interface MiniTag {
    tag: string
    type: TagType
    description: string | null
    image: string | null
    imageHash: string | null
    social: string | null
    twitter: string | null
    website: string | null
    fandom: string | null
    wikipedia: string | null
    count?: string
}

export interface TagCategories {
    artists: MiniTag[]
    characters: MiniTag[]
    series: MiniTag[]
    meta: MiniTag[]
    tags: MiniTag[]
}

export interface TagCount {
    tag: string
    type: TagType
    image: string | null
    imageHash: string | null
    count: string
    hidden: boolean | null
    r18: boolean | null
}

export interface Alias {
    aliasID: string
    tag: string
    alias: string
}

export interface Implication {
    implicationID: string
    tag: string
    implication: string
}

export interface Tag {
    tagID: string
    tag: string
    type: TagType
    creator: string
    createDate: string
    updater: string
    updatedDate: string
    description: string
    image: string | null
    imageHash: string | null
    website: string | null
    social: string | null
    twitter: string | null
    fandom: string | null
    wikipedia: string | null
    featuredPost: Post | null
    hidden: boolean | null
    banned: boolean | null
    aliases: Array<Alias | null>
    implications: Array<Implication | null>
    pixivTags: string[] | null
    r18: boolean | null
}

export interface TagSearch extends Omit<Tag, "featuredPost"> {
    featuredPost: string | null
    aliasCount: string
    postCount: string
    tagCount: string
    variationCount: string
    fake?: boolean
}

export interface TagCategorySearch extends Tag {
    cuteness: string
    posts: Post[]
    postCount: string
    tagCount: string
    fake?: string
}

export interface BulkTag {
    tag: string
    type: TagType
    description: string | null
    image: string | null
    imageHash: string | null
}

export interface TagGroup {
    groupID: string
    postID: string
    name: string
    tags: string[]
}

export interface MiniTagGroup {
    name: string
    tags: string[]
}

export interface TagGroupCategory {
    name: string
    tags: MiniTag[]
}

export interface AliasHistory {
    historyID: string
    user: string
    date: string
    source: string
    target: string
    type: AliasHistoryType
    affectedPosts: string[]
    sourceData: Tag
    reason: string | null
}

export interface ImplicationHistory extends Omit<AliasHistory, "sourceData"> {}

export interface AliasHistorySearch extends ImplicationHistory {
    sourceData: Tag | null
    historyCount: string
    fake?: boolean
}

export interface AliasToParams {
    tag: string
    aliasTo: string
    username?: string
    reason?: string | null
    silent?: boolean
    skipAliasing?: boolean
}

export interface TagDeleteRequestFulfillParams {
    username: string
    tag: string
    accepted: boolean
}

export interface AliasToRequestParams {
    tag: string
    aliasTo: string
    reason: string
}

export interface AliasToRequestFulfillParams {
    username: string
    tag: string
    aliasTo: string
    accepted: boolean
}

export interface TagEditRequestFulfillParams {
    username: string
    tag: string
    image: string | null
    accepted: boolean
}

export interface TagHistoryParams {
    tag?: string
    historyID?: string
    username?: string
    query?: string
    offset?: number
}

export interface TagEditParams {
    tag: string
    key?: string
    type?: TagType
    description?: string
    image?: number[] | ["delete"]
    aliases?: string[]
    implications?: string[]
    pixivTags?: string[] | null
    website?: string | null
    social?: string | null
    twitter?: string | null
    fandom?: string | null
    wikipedia?: string | null
    featuredPost?: string | null
    r18?: boolean
    reason?: string | null
    updater?: string
    updatedDate?: string
    silent?: boolean
}

export interface TagEditRequestParams extends Omit<TagEditParams, "updater" | "updatedDate" | "silent"> {}