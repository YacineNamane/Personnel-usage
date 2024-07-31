import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const deleteArticle = async (articleId) => {
  try {
    await axios.delete(`${BASE_URL}/articles/delete/${articleId}`);
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error;
  }
};

export const addArticle = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/articles/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding article:", error);
    throw error;
  }
};

export const updateArticle = async (articleId, formData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/articles/update/${articleId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};
