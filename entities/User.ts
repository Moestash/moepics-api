import {API} from "../api"
import type {PrunedUser, Session, PostSearch, Favgroup, CommentSearch,
Ban, SearchHistory, LoginHistory, EditCounts, ForumPostSearch,
ForumPostSearchParams, UserFavoritesParams, UserCommentsParams,
SignupParams, LoginParams, UserPfpParams, SaveSearchEditParams,
ChangeUsernameParams, ChangePasswordParams, ChangeEmailParams,
VerifyEmailParams, ForgotPasswordParams, ResetPasswordParams, BanParams,
BanResponse, UserRole} from "../types/Types"

export class UserRoutes {
    public constructor(private readonly api: API) {}

    public get = async (username: string) => {
        const response = await this.api.get("/api/user", {username})
        return response as PrunedUser | undefined
    }

    public session = async () => {
        const response = await this.api.get("/api/user/session", undefined)
        return response as Session
    }

    public favorites = async (params: UserFavoritesParams) => {
        const response = await this.api.get("/api/user/favorites", params)
        return response as PostSearch[]
    }

    public uploads = async (params: UserFavoritesParams) => {
        const response = await this.api.get("/api/user/uploads", params)
        return response as PostSearch[]
    }

    public favgroups = async (username?: string) => {
        const response = await this.api.get("/api/user/favgroups", username ? {username} : undefined)
        return response as Favgroup[]
    }

    public comments = async (params: UserCommentsParams) => {
        const response = await this.api.get("/api/user/comments", params)
        return response as CommentSearch[]
    }

    public getBan = async (username: string) => {
        const response = await this.api.get("/api/user/ban", {username})
        return response as Ban | undefined
    }

    public checkMail = async () => {
        const response = await this.api.get("/api/user/checkmail", undefined)
        return response as boolean
    }

    public history = async (params?: {offset?: number; query?: string}) => {
        const response = await this.api.get("/api/user/history", params ?? {})
        return response as SearchHistory[]
    }

    public loginHistory = async () => {
        const response = await this.api.get("/api/user/login/history", undefined)
        return response as LoginHistory[]
    }

    public editCounts = async (username?: string) => {
        const response = await this.api.get("/api/user/edit/counts", username ? {username} : undefined)
        return response as EditCounts
    }

    public forumPosts = async (params: ForumPostSearchParams) => {
        const response = await this.api.get("/api/user/forumposts", params)
        return response as ForumPostSearch[]
    }
    
    public signup = async (params: SignupParams) => {
        const response = await this.api.post("/api/user/signup", params)
        return response as string
    }

    public login = async (params: LoginParams) => {
        const response = await this.api.post("/api/user/login", params)
        return response as string
    }

    public logout = async () => {
        const response = await this.api.post("/api/user/logout", undefined)
        return response as string
    }

    public logoutSessions = async () => {
        const response = await this.api.post("/api/user/logout-sessions", undefined)
        return response as string
    }

    public setPfp = async (params: UserPfpParams) => {
        const response = await this.api.post("/api/user/pfp", params)
        return response as string
    }

    public changeBio = async (bio: string) => {
        const response = await this.api.post("/api/user/changebio", {bio})
        return response as string
    }

    public changeUsername = async (params: ChangeUsernameParams) => {
        const response = await this.api.post("/api/user/changeusername", params)
        return response as string
    }

    public changePassword = async (params: ChangePasswordParams) => {
        const response = await this.api.post("/api/user/changepassword", params)
        return response as string
    }

    public changeEmail = async (params: ChangeEmailParams) => {
        const response = await this.api.post("/api/user/changeemail", params)
        return response as string
    }

    public verifyEmail = async (params: VerifyEmailParams) => {
        const response = await this.api.post("/api/user/verifyemail", params)
        return response as string
    }

    public forgotPassword = async (params: ForgotPasswordParams) => {
        const response = await this.api.post("/api/user/forgotpassword", params)
        return response as string
    }

    public resetPassword = async (params: ResetPasswordParams) => {
        const response = await this.api.post("/api/user/resetpassword", params)
        return response as string
    }

    public ban = async (params: BanParams) => {
        const response = await this.api.post("/api/user/ban", params)
        return response as BanResponse
    }

    public unban = async (username: string) => {
        const response = await this.api.post("/api/user/unban", {username})
        return response as string
    }

    public promote = async (username: string, role: UserRole) => {
        const response = await this.api.post("/api/user/promote", {username, role})
        return response as string
    }

    public editSavedSearch = async (params: SaveSearchEditParams) => {
        const response = await this.api.put("/api/user/savesearch", params)
        return response as string
    }

    public deletePfp = async () => {
        const response = await this.api.delete("/api/user/pfp", undefined)
        return response as string
    }

    public deleteSavedSearch = async (params?: {name?: string; all?: boolean}) => {
        const response = await this.api.delete("/api/user/savesearch/delete", params ?? {})
        return response as string
    }

    public deleteAccount = async () => {
        const response = await this.api.delete("/api/user/delete", undefined)
        return response as string
    }

    public deleteHistory = async (params?: {postID?: string; all?: boolean}) => {
        const response = await this.api.delete("/api/user/history/delete", params ?? {})
        return response as string
    }
}