export type User = Record<string, string>;
export interface SearchResult {
    items: User[];
    total_count: number;
}

export interface UserListData {
    users: User[];
    total_count: number;
}
