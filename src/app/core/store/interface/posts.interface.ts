
export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
    backgroundColor:string;
    fontColor:string;
    headerBackgroundColor:string;
    
  }
  
  export interface IPosts {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
  }
  export interface IDataById {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
    additionalProperty: string; // Example additional property specific to fetchDataById response
  }