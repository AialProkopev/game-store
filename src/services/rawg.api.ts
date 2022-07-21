import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getRandomInt } from 'src/utils/getRandomInt/randomInt';
import {DataType} from 'src/types/Data.type'
import { GameType } from 'src/types/Game.type';
import { ScreenshotType } from "src/types/Screenshot.type"

const api = {
  url: 'https://api.rawg.io/',
  key: '6404ffdb94d2456c93ec1ad3d7807f90',
};

export const gamesApi = createApi({
  reducerPath: 'api/games',
  baseQuery: fetchBaseQuery({ baseUrl: api.url}),
  endpoints: build => ({
    getGameList: build.query<DataType<GameType>, {page: number, pageSize: number, genre: string}>({
      query: (arg) => {
        const {page, pageSize, genre} = arg
        if (genre) return `api/games?key=${api.key}&page=${page}&page_size=${pageSize}&genres=${genre}`
        else return `api/games?key=${api.key}&page=${page}&page_size=${pageSize}`
      } 
    }),
    getGame: build.query<GameType, {id: number}>({
      query: (arg)=> {
        const {id} = arg
        return `api/games/${id}?key=${api.key}`
      }
    }),
    getGenres: build.query({
      query: ()=> {
        return `api/genres?key=${api.key}`
      }
    }),
    getRandom4Games: build.query({
      query: ()=> {
        const randomInt = getRandomInt(100)
        return `api/games?key=6404ffdb94d2456c93ec1ad3d7807f90&page=${randomInt}&page_size=4`
      }
    }),
    getBestGames: build.query<DataType<GameType>, {pageSize: number}>({
      query: (arg)=> {
        const {pageSize} = arg
        const randomInt = getRandomInt(50)
        return `api/games?key=${api.key}&page=${randomInt}&page_size=${pageSize}&ordering=-rating`
      }
    }),
    getScreenshots: build.query<DataType<ScreenshotType>, {id: number}>({
      query: (arg)=> {
        const {id} = arg
        return `api/games/${id}/screenshots?key=${api.key}`
      }
    }),
    getGamesBySearch: build.query<DataType<GameType>, {search: string}>({
      query: (arg)=> {
        const {search} = arg
        return `api/games?key=${api.key}&search=${search}`
      }
    }),
  })
})


export const {
  useGetGameListQuery, 
  useLazyGetGameListQuery,
  useGetGameQuery, 
  useLazyGetGameQuery, 
  useLazyGetGenresQuery, 
  useGetRandom4GamesQuery, 
  useGetBestGamesQuery,
  useGetScreenshotsQuery,
  useGetGamesBySearchQuery
} = gamesApi

export const {
  getRandom4Games
} = gamesApi.endpoints