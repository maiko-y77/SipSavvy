import axios from "axios";

import { Article } from "../Article/types";

export const getArticles = async (): Promise<Article[]> => {
    const response = await axios("http://localhost:3001/articles")
    console.log(response.data)
    return response.data
}
