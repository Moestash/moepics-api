import {API} from "../api"
import {Image} from "../types/Types"

export class Links {
    public constructor(private readonly api: API) {}

    public getImageLink = (image: Image, upscaled?: boolean) => {
        if (!image.filename && !image.upscaledFilename) return ""
        let filename = upscaled ? image.upscaledFilename || image.filename : image.filename
        return `${this.api.baseURL}/${image.type}/${image.postID}-${image.order}-${filename}`
    }

    public getRawImageLink = (filename: string) => {
        return filename ? `${this.api.baseURL}/${filename}` : ""
    }

    public getUnverifiedImageLink = (image: Image, upscaled?: boolean) => {
        if (!image.filename && !image.upscaledFilename) return ""
        let filename = upscaled ? image.upscaledFilename || image.filename : image.filename
        return `${this.api.baseURL}/unverified/${image.type}/${image.postID}-${image.order}-${filename}`
    }

    public getThumbnailLink = (image: Image, sizeType: string, mobile?: boolean, forceLive?: boolean) => {
        if (!image.thumbnail && !image.filename) return ""
        let size = 265
        if (sizeType === "tiny") size = 350
        if (sizeType === "small") size = 400
        if (sizeType === "medium") size = 600
        if (sizeType === "large") size = 800
        if (sizeType === "massive") size = 1000
        if (mobile) size = Math.floor(size / 2)
        let originalFilename = `${image.postID}-${image.order}-${encodeURIComponent(image.filename)}`
        let filename = image.thumbnail || originalFilename
        if (forceLive) return this.getImageLink(image, false)
        if (image.type === "image" || image.type === "comic") {
            return this.getImageLink(image, false)
        }
        return `${this.api.baseURL}/thumbnail/${size}/${image.type}/${filename}`
    }

    public getRawThumbnailLink = (filename: string, sizeType: string, mobile?: boolean) => {
        if (!filename) return ""
        let size = 265
        if (sizeType === "tiny") size = 350
        if (sizeType === "small") size = 400
        if (sizeType === "medium") size = 600
        if (sizeType === "large") size = 800
        if (sizeType === "massive") size = 1000
        if (mobile) size = Math.floor(size / 2)
        return `${this.api.baseURL}/${`thumbnail/${size}/${filename}`}`
    }

    public getUnverifiedThumbnailLink = (image: Image, sizeType: string, mobile?: boolean) => {
        if (!image.thumbnail && !image.filename) return ""
        let size = 265
        if (sizeType === "tiny") size = 350
        if (sizeType === "small") size = 400
        if (sizeType === "medium") size = 600
        if (sizeType === "large") size = 800
        if (sizeType === "massive") size = 1000
        if (mobile) size = Math.floor(size / 2)
        let originalFilename = `${image.postID}-${image.order}-${image.filename}`
        let filename = image.thumbnail || originalFilename
        if (image.type === "image" || image.type === "comic") {
            return this.getUnverifiedImageLink(image, false)
        }
        return `${this.api.baseURL}/thumbnail/${size}/unverified/${image.type}/${filename}`
    }

    public getTagLink = (folder: string, filename: string | null) => {
        if (!filename) return ""
        let dest = "tag"
        if (folder === "artist") dest = "artist"
        if (folder === "character") dest = "character"
        if (folder === "series") dest = "series"
        if (folder === "pfp") dest = "pfp"
        if (!folder || filename.includes("history/")) return `${this.api.baseURL}/${filename}`
        return `${this.api.baseURL}/${dest}/${filename}`
    }

    public getUnverifiedTagLink = (folder: string, filename: string | null) => {
        if (!filename) return ""
        let dest = "tag"
        if (folder === "artist") dest = "artist"
        if (folder === "character") dest = "character"
        if (folder === "series") dest = "series"
        if (folder === "pfp") dest = "pfp"
        return `${this.api.baseURL}/unverified/${dest}/${filename}`
    }
}