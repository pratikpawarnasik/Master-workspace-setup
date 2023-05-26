


export class APIConfigs {
    apiPath: any;
    getPostsUrl: string;

    constructor() {
        this.apiPath = "https://dummyjson.com/";
        this.getPostsUrl = this.apiPath + "posts";
    }

    _getPostsUrl() {
        return this.getPostsUrl;
    }

    _getPostByIDUrl(id: number) {
        return `${this.apiPath}posts/${id}`; 
    }
   
}

export default APIConfigs;