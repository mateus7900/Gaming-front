import { URL_API_BASE } from "../env/env";
import { Post } from "../types/Post";
import { Trending } from "../types/Trending";
import api from "./api";

export async function getPosts(username: string): Promise<Post[]> {
  const URL = `${URL_API_BASE}/posts?username=${username}`;

  const res = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function getTimeline(username: string): Promise<Post[]> {
  const response = await api.get(`/posts/timeline?username=${username}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = response.data;

  return result as Post[]
}

export async function insertPost(content: string, author: string): Promise<Post> {
  const response = await api.post("/posts", { content, author }, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const result = response.data;
  return result as Post
}

export async function getTrendings(): Promise<Trending[]> {
  const URL = `${URL_API_BASE}/posts/trending`;

  const res = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function likePost(username: string, postId: string): Promise<boolean> {
  const response = await api.post("/posts", { username, postId }, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  const result = response.data
  return result as boolean
}