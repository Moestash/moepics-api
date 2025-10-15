import {API} from "../api"

export class Util {
    public constructor(private readonly api: API) {}

    public multiCall = async <P, R>(params: P, searchFunction: (params: P) => Promise<R[]>, limit?: number) => {
        let results: R[] = []
        let moreResults = true
        let offset = 0
        while (moreResults) {
            const result = await searchFunction({...params, offset})
            results.push(...result)
            offset += result.length
            moreResults = result.length > 0
            if (limit && result.length >= limit) break
        }
        return limit ? results.slice(0, limit) : results
    }
}