import {PostRating, UserRole, PostSearch, Favgroup, CommentSort, CommentSearch, Ban, SearchHistory,
ForumPostSearch} from "./Types"

export interface PrunedUser {
    userID: string
    username: string
    bio: string
    image: string | null
    imageHash: string | null
    imagePost: string | null
    joinDate: string
    postCount: number
    publicFavorites: boolean
    publicTagFavorites: boolean
    role: UserRole
    banned: boolean | null
    banExpiration: string | null
    deletedPosts?: string[]
}

export interface User extends PrunedUser {
    email?: string
    emailVerified?: boolean
    cookieConsent?: boolean | null
    $2fa?: boolean
    ips?: string[]
    password?: string
    showRelated?: boolean
    showTooltips?: boolean
    showTagTooltips?: boolean
    showTagBanner?: boolean
    downloadPixivID?: boolean
    autosearchInterval?: number
    upscaledImages?: boolean
    forceNoteBubbles?: boolean
    liveAnimationPreview?: boolean
    liveModelPreview?: boolean
    savedSearches?: {[key: string]: string} | null
    blacklist?: string
    showR18?: boolean
    premiumExpiration?: string | null
    lastNameChange?: string | null
}

type Require<T> = {
    [K in keyof T]-?: T[K]
}

export interface Session extends Require<Omit<User, "password" | "ip">> {
    cookie: {
        _expires: string
        httpOnly: boolean
        originalMaxAge: number
        path: string
        sameSite: string
        secure: boolean
    }
    captchaNeeded: boolean
    csrfToken: string
    publicKey: string
}

export interface ServerSession extends Partial<Omit<User, "password">> {
    captchaNeeded?: boolean
    captchaAnswer?: string
    csrfToken?: string
    csrfSecret?: string
    publicKey?: string
    apiKey?: boolean
}

export interface LoginHistory {
    loginID: string
    username: string
    type: string
    ip: string
    timestamp: string
    device: string
    region: string
}

export interface Banner {
    bannerID: string
    date: string | null
    link: string | null
    text: string | null
}

export interface SignupParams {
    username: string
    email: string
    password: string
    captchaResponse: string
}

export interface LoginParams {
    username: string
    password: string
    captchaResponse: string
}

export interface UserPfpParams {
    bytes: number[]
    postID?: string
}

export interface SaveSearchParams {
    name: string
    tags: string
}

export interface SaveSearchEditParams {
    name: string
    key: string
    tags: string
}

export interface ChangeUsernameParams {
    newUsername: string
    captchaResponse: string
}

export interface ChangePasswordParams {
    oldPassword: string
    newPassword: string
}

export interface ChangeEmailParams {
    newEmail: string
    captchaResponse: string
}

export interface VerifyEmailParams {
    email: string
    captchaResponse: string
}

export interface ForgotPasswordParams {
    email: string
    captchaResponse: string
}

export interface ResetPasswordParams {
    username: string
    password: string
    token: string
}

export interface UserFavoritesParams {
    username?: string
    rating: PostRating
    offset?: number
    limit?: number
}

export interface UserCommentsParams {
    username?: string
    query?: string
    sort: CommentSort
    offset?: number
}

export interface BanParams {
    username: string
    reason: string
    deleteUnverifiedChanges: boolean
    deleteHistoryChanges: boolean
    deleteComments: boolean
    deleteMessages: boolean
    days?: number
}

export interface BanResponse {
    revertPostIDs: string[]
    revertTagIDs: string[]
    revertGroupIDs: string[]
    revertNoteIDs: {postID: string, order: number}[]
}

export interface EditCounts {
    postEdits: number
    tagEdits: number
    noteEdits: number
    groupEdits: number
}

export interface ForumPostSearchParams {
    username?: string
    query?: string
    sort?: CommentSort
    offset?: number
}