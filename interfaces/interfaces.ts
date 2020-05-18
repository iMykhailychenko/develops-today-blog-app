export interface IAllPosts {
    id: number;
    title: string;
    body: string;
}

export interface IComments {
    id?: number;
    postId?: number;
    body: string;
}

export interface ISinglePost {
    id: number;
    title: string;
    body: string;
    comments: IComments[];
}
