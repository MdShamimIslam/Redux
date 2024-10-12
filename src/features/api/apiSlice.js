import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 10 // auto refetch in 10s
    }),

    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),

    // STEP-1 NOT WORKING
    // title_likes=css&title_likes=tailwinds_limit=4
    // getRelatedVideos: builder.query({
    //   query: ({ id, title }) => {
    //     const tags = title.split(" ");
    //     const likes = tags.map((tag) => `title_like=${tag}`);
    //     const queryString = `/videos?${likes.join("&")}&id_ne=${id}&_limit=4`;

    //     return queryString;
    //   },
    // }),
    
    // STEP-2 WORKING FINE
    getRelatedVideos: builder.query({
        query: () => `/videos`,
        transformResponse: (response, _meta, arg) => {
          const { id, title } = arg; 
          const tags = title.split(" ");

          return response
            .filter((video) => 
              tags.some((tag) => video.title.toLowerCase().includes(tag.toLowerCase())) &&
              video.id !== id
            )
            .slice(0, 4);
        }
      }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } = apiSlice;
