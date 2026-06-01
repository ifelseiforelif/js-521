class RestClient {
    static _URL = " http://localhost:3000/posts";
    static async getPosts() {
        const response = await fetch(RestClient._URL);
        const data = await response.json();
        console.log(data);
    }
    static async addPost(post) {
        const response = await fetch(RestClient._URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log(data);
    }
}
export default RestClient;
//# sourceMappingURL=RestClient.js.map