import "dotenv/config"
import Moepictures from "./moepictures"

const start = async () => {
    const moepictures = new Moepictures(process.env.MOEPICTURES_API_KEY!)
    // const result = await moepictures.util.multiCall({query: "klee-(genshin-impact)"}, moepictures.search.posts)
    const result = await moepictures.search.posts({query: "klee-(genshin-impact)"})
    const image = moepictures.links.getImageLink(result[0].images[0], false)
    const buffer = await moepictures.api.fetch(image).then((r) => r.arrayBuffer())
    console.log(buffer)
}

start()