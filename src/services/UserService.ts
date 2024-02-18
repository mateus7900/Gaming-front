import { User } from "../types/User";
import api from "./api";

export async function login(username: string, password: string): Promise<User> {
    const body = { username, password }

    const response = await api.post(
        "/auth", 
        body, 
        {
            headers: {
                "Content-Type": "application/json",
            }
        }
    )

    const result = response.data;
    return result as User;
}

export async function getUser(username: string): Promise<User> {

    const response = await api.get(
        `/profile?username=${username}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const result = await response.data;
    return result as User;
}

export async function getExplore(username: string): Promise<User[]> {

    const response = await api.get(`/profile/explore?username=${username}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const result = response.data
    return result as User[]
}

export async function createFollowRelationship(follower: string, followed: string): Promise<boolean> {
    const body = { followerName: follower, followedName: followed }

    const response = await api.post(`/profile/add-follow`,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const result = await response.data;
    return result as boolean;
}