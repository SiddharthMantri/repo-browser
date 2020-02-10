export type GithubUserType = {
    login: string
    id?: number
    node_id?: string
    avatar_url?: string
    gravatar_id?: string
    url?: string
    html_url?: string
    followers_url?: string
    following_url?: string
    gists_url?: string
    starred_url?: string
    subscriptions_url?: string
    organizations_url?: string
    repos_url: string
    events_url?: string
    received_events_url?: string
    type?: string
    site_admin?: boolean
    name?: string
    company?: any
    blog?: string
    location?: any
    email?: any
    hireable?: any
    bio?: any
    public_repos?: number
    public_gists?: number
    followers?: number
    following?: number
    created_at?: Date
    updated_at?: Date
}
export type SearchResultType = {
    login?: string
    id?: number
    node_id?: string
    avatar_url?: string
    gravatar_id?: string
    url?: string
    html_url?: string
    followers_url?: string
    following_url?: string
    gists_url?: string
    starred_url?: string
    subscriptions_url?: string
    organizations_url?: string
    repos_url?: string
    events_url?: string
    received_events_url?: string
    type?: string
    site_admin?: boolean
    score?: number
}
export type RepoType = {
    name: string
    description: string
}
export type Orgs = {
    login: string
    id: number
    node_id: string
    url: string
    repos_url: string
    events_url: string
    hooks_url: string
    issues_url: string
    members_url: string
    public_members_url: string
    avatar_url: string
    description: string
}