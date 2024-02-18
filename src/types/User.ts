import { Post } from "./Post"

export interface User {
    username: string
    password: string
    firstName: string
    lastName: string
    age: number
    verified: boolean
    description: string
    followersCount: number
    followingCount: number
    postsCount: number
    createdAt: Date
    userId: string
    followers: string[]
    following: string[]
    posts: Post[]
}