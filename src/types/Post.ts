export interface Post {
    postId: string
    content: string
    likes: number
    replies: number
    inReplyAt: string | null
    username: string
    createdAt: Date
    authorName: string
}