import "dotenv/config"
import Moepictures from "./moepictures"

const start = async () => {
    const moepictures = new Moepictures(process.env.MOEPICTURES_API_KEY!)
    const post = await moepictures.posts.get("46725")
    if (!post) return
    const image = moepictures.links.getImageLink(post.images[0], false)
    const buffer = await moepictures.api.fetch(image).then((r) => r.arrayBuffer())
    console.log(buffer)
}

start()