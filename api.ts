export class API {
    public baseURL = "https://moepictures.net"

    public headers = {
        "Content-Type": "application/json"
    }

    public constructor(public apiKey: string) {}

    public get = async (endpoint: string, params?: {[key: string]: any}) => {
        let headers = {...this.headers, "x-api-key": this.apiKey}
         const queryString = params ? "?" + new URLSearchParams(params).toString() : ""
        const response = await fetch(this.baseURL + endpoint + queryString, {headers})
        const contentType = response.headers.get("content-type")
        return contentType?.includes("application/json") ? response.json() : response.text()
    }

    public post = async (endpoint: string, body?: {[key: string]: any}) => {
        let headers = {...this.headers, "x-api-key": this.apiKey}
        const response = await fetch(this.baseURL + endpoint, {method: "POST", headers, body: JSON.stringify(body)})
        const contentType = response.headers.get("content-type")
        return contentType?.includes("application/json") ? response.json() : response.text()
    }

    public put = async (endpoint: string, body?: {[key: string]: any}) => {
        let headers = {...this.headers, "x-api-key": this.apiKey}
        const response = await fetch(this.baseURL + endpoint, {method: "PUT", headers, body: JSON.stringify(body)})
        const contentType = response.headers.get("content-type")
        return contentType?.includes("application/json") ? response.json() : response.text()
    }

    public delete = async (endpoint: string, params?: {[key: string]: any}) => {
        let headers = {...this.headers, "x-api-key": this.apiKey}
         const queryString = params ? "?" + new URLSearchParams(params).toString() : ""
        const response = await fetch(this.baseURL + endpoint + queryString, {method: "DELETE", headers})
        const contentType = response.headers.get("content-type")
        return contentType?.includes("application/json") ? response.json() : response.text()
    }

    public fetch = async (url: string, params?: {[key: string]: any}) => {
        let headers = {"x-api-key": this.apiKey}
        const queryString = params ? "?" + new URLSearchParams(params).toString() : ""
        return fetch(url + queryString, {headers})
    }
}