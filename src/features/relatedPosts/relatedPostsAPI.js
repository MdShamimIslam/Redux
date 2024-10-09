import axiosInstance from "../../utils/axios"

export const getRelatedPosts = async({id,tags}) => {
    const res = await axiosInstance.get(`/blogs?id_ne=${id}`);
    // filtered tags
    const filteredPosts = res.data.filter(post => post?.tags?.some( tag => tags.includes(tag)));

    return filteredPosts;
}