export interface ICreateBookDTO {
    id?: string;
    title: string;
    pages: number;
    authorId?: string;
    publishedAt?: Date;
}
