import axiosInstance from "../../utils/axios"


export const getPosts = async () => {
    const res = await axiosInstance.get("/blogs");
    return res.data;
}

// Update likes for a specific post
export const updateLikes = async (id, updatedLikes) => {
    const res = await axiosInstance.patch(`/blogs/${id}`, { likes: updatedLikes });
    return res.data;
  };
  
  // Toggle saved status for a specific post
  export const updateSavedStatus = async (id, updatedSaved) => {
    const res = await axiosInstance.patch(`/blogs/${id}`, { isSaved: updatedSaved });
    return res.data;
  };