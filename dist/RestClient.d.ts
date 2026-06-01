import PostType from "./PostType.js";
declare class RestClient {
    private static readonly _URL;
    static getPosts(): Promise<void>;
    static addPost(post: PostType): Promise<void>;
}
export default RestClient;
//# sourceMappingURL=RestClient.d.ts.map