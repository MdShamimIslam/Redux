import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
     register: builder.mutation({
        query: (data) => ({
            url:"/register",
            method:"POST",
            body: data
        }),
        async onQueryStarted(arg,{queryFulfilled,dispatch}){
            try {
                const result = await queryFulfilled;
            
                // set data in localStorage
                localStorage.setItem("auth", JSON.stringify({
                    accessToken: result.data.accessToken,
                    user: result.data.user,
                }));
                // action dispatch
                dispatch(userLoggedIn({
                    accessToken: result.data.accessToken,
                    user: result.data.user,
                }))

            } catch (error) {
                console.log('authApi-->',error);
            }
        }
     }),
     login: builder.mutation({
        query: (data) => ({
            url:"/login",
            method:"POST",
            body: data
        }),
        async onQueryStarted(arg,{queryFulfilled,dispatch}){
            try {
                const result = await queryFulfilled;
                // set data in localStorage
                localStorage.setItem("auth", JSON.stringify({
                    accessToken: result.data.accessToken,
                    user: result.data.user,
                }));
                // action dispatch
                dispatch(userLoggedIn({
                    accessToken: result.data.accessToken,
                    user: result.data.user,
                }))

            } catch (error) {
                console.log('authApi-->',error);
            }
        }
     }),
    })
});


export const { useRegisterMutation, useLoginMutation } = authApi;