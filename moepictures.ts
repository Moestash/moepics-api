import {CommentRoutes, CutenessRoutes, FavoriteRoutes, GroupRoutes,
MessageRoutes, MiscRoutes, NoteRoutes, PostRoutes, SearchRoutes, TagRoutes,
ThreadRoutes, TokenRoutes, UploadRoutes, UserRoutes, Links, Util,
ImageRoutes} from "./entities"
import {API} from "./api"

export class Moepictures {
    public static apiKey: string
    public api: API
    public comments: CommentRoutes
    public cuteness: CutenessRoutes
    public favorites: FavoriteRoutes
    public groups: GroupRoutes
    public images: ImageRoutes
    public messages: MessageRoutes
    public misc: MiscRoutes
    public notes: NoteRoutes
    public posts: PostRoutes
    public search: SearchRoutes
    public tags: TagRoutes
    public threads: ThreadRoutes
    public tokens: TokenRoutes
    public uploads: UploadRoutes
    public users: UserRoutes
    public links: Links
    public util: Util

    public constructor(apiKey: string) {
        Moepictures.apiKey = apiKey
        this.api = new API(Moepictures.apiKey)
        this.comments = new CommentRoutes(this.api)
        this.cuteness = new CutenessRoutes(this.api)
        this.favorites = new FavoriteRoutes(this.api)
        this.groups = new GroupRoutes(this.api)
        this.images = new ImageRoutes(this.api)
        this.messages = new MessageRoutes(this.api)
        this.misc = new MiscRoutes(this.api)
        this.notes = new NoteRoutes(this.api)
        this.posts = new PostRoutes(this.api)
        this.search = new SearchRoutes(this.api)
        this.tags = new TagRoutes(this.api)
        this.threads = new ThreadRoutes(this.api)
        this.tokens = new TokenRoutes(this.api)
        this.uploads = new UploadRoutes(this.api)
        this.users = new UserRoutes(this.api)
        this.links = new Links(this.api)
        this.util = new Util(this.api)
    }
}

export * from "./entities"
export * from "./types/Types"
export * from "./api"
export default Moepictures
module.exports.default = Moepictures