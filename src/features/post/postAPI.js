import axiosInstance from "../../utils/axios"


export const getPost = async (id) => {
    const res = await axiosInstance.get(`/blogs/${id}`);
    return res?.data;
}