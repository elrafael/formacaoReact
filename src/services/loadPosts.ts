import { api } from "./api";

export function loadPosts() {
    const result = api.get('users/1/posts')

    return result
}