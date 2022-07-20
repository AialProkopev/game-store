import {GameType} from './Game.type'

interface DataType<T> {
    count: number
    description : string
    filters: {
        years: Array<{
            count: number
            decade: number
            filter: string
            from : number
            nofollow: boolean
            to: number
        }>
    }
    next : string
    nofollow: boolean
    nofollow_collections : Array<string>
    previous: string
    seo_title: string
    results: Array<T>
}

export type {DataType}