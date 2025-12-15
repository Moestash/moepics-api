import {API} from "../api"
import type {DeviationRSSExtended} from "deviantart.ts"
import type {PixivResponse, Banner, SaucenaoResponse,
WDTaggerResponse, OCRResponse, CoinbaseEvent, SourceLookupParams,
SourceLookup, TagLookupParams, TagLookup} from "../types/Types"

export class MiscRoutes {
    public constructor(private readonly api: API) {}

    public createCaptcha = async (color: string) => {
        const response = await this.api.get("/api/misc/captcha/create", {color})
        return response as {captcha: string}
    }

    public pixiv = async (url: string) => {
        const response = await this.api.get("/api/misc/pixiv", {url})
        return response as PixivResponse
    }

    public deviantart = async (url: string) => {
        const response = await this.api.get("/api/misc/deviantart", {url})
        return response as DeviationRSSExtended
    }

    public redirect = async (url: string) => {
        const response = await this.api.get("/api/misc/redirect", {url})
        return response as string
    }

    public emojis = async () => {
        const response = await this.api.get("/api/misc/emojis", undefined)
        return response as {[key: string]: string}
    }

    public banner = async () => {
        const response = await this.api.get("/api/misc/banner", undefined)
        return response as Banner | undefined
    }

    public apiKeyStatus = async () => {
        const response = await this.api.get("/api/misc/api-key/status", undefined)
        return response as boolean
    }

    public captcha = async (captchaResponse: string) => {
        const response = await this.api.post("/api/misc/captcha", {captchaResponse})
        return response as null
    }

    public saucenao = async (params: number[]) => {
        const response = await this.api.post("/api/misc/saucenao", params)
        return response as SaucenaoResponse[]
    }

    public booruLinks = async (bytes: number[], pixivID: string) => {
        const response = await this.api.post("/api/misc/boorulinks", {bytes, pixivID})
        return response as string[]
    }

    public revdanbooru = async (params: number[]) => {
        const response = await this.api.post("/api/misc/revdanbooru", params)
        return response as string
    }

    public proxy = async (url: string) => {
        const response = await this.api.post("/api/misc/proxy", {url})
        return response as {data: number[]}[]
    }

    public translate = async (params: string[]) => {
        const response = await this.api.post("/api/misc/translate", params)
        return response as string[]
    }

    public romajinize = async (params: string[]) => {
        const response = await this.api.post("/api/misc/romajinize", params)
        return response as string[]
    }

    public wdtagger = async (params: number[]) => {
        const response = await this.api.post("/api/misc/wdtagger", params)
        return response as WDTaggerResponse
    }

    public ocr = async (params: number[]) => {
        const response = await this.api.post("/api/misc/ocr", params)
        return response as OCRResponse[]
    }

    public paymentLink = async () => {
        const response = await this.api.post("/api/premium/paymentlink", undefined)
        return response as { hosted_url: string }
    }

    public payment = async (event: CoinbaseEvent) => {
        const response = await this.api.post("/api/premium/payment", {event})
        return response as string
    }

    public setBanner = async (text: string, link: string) => {
        const response = await this.api.post("/api/misc/setbanner", {text, link})
        return response as string
    }

    public litterbox = async (params: number[]) => {
        const response = await this.api.post("/api/misc/litterbox", params)
        return response as string
    }

    public clientKey = async (publicKey: string) => {
        const response = await this.api.post("/api/client-key", {publicKey})
        return response as string
    }

    public serverKey = async () => {
        const response = await this.api.post("/api/server-key", undefined)
        return response as {publicKey: string}
    }

    public blacklistIP = async (ip: string, reason: string) => {
        const response = await this.api.post("/api/misc/blacklistip", {ip, reason})
        return response as string
    }

    public imageHash = async (params: number[]) => {
        const response = await this.api.post("/api/misc/imghash", params)
        return response as string
    }

    public apiKey = async () => {
        const response = await this.api.post("/api/misc/api-key", undefined)
        return response as string
    }

    public sourceLookup = async (params: SourceLookupParams) => {
        const response = await this.api.post("/api/misc/sourcelookup", params)
        return response as SourceLookup
    }

    public tagLookup = async (params: TagLookupParams) => {
        const response = await this.api.post("/api/misc/taglookup", params)
        return response as TagLookup
    }

    public storage = async (link: string, songCover?: boolean) => {
        const response = await this.api.post("/storage", {link, songCover})
        return response as string
    }

    public unblacklistIP = async (ip: string) => {
        const response = await this.api.delete("/api/misc/unblacklistip", {ip})
        return response as string
    }

    public deleteAPIKey = async () => {
        const response = await this.api.delete("/api/misc/api-key/delete", undefined)
        return response as string
    }

    public danbooruTags = async (tags: string) => {
        const response = await this.api.post("/api/misc/danboorutags", {tags})
        return response as {tags: string}
    }

    public moepicsTags = async (tags: string) => {
        const response = await this.api.post("/api/misc/moepicstags", {tags})
        return response as {tags: string}
    }
}