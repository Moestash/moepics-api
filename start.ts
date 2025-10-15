import "dotenv/config"
import Moepictures from "./moepictures"

const start = async () => {
    const moepictures = new Moepictures(process.env.MOEPICTURES_API_KEY!)
    const result = await moepictures.util.multiCall({query: "klee-(genshin-impact)"}, moepictures.search.posts)
    console.log(result)
    console.log(result.length)
}

start()