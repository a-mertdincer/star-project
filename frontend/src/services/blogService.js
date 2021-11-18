import axios from "axios"

export default class BlogService{
    getBlogs(){
        return axios.get()
    }

    getByBlogName(blogName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ blogName)
    }

}