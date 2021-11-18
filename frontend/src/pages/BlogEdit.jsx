import React , {useState,useEffect} from 'react';
import { Button, Input, Table } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import BlogService from '../services/blogService';

export default function BlogEdit() {


    let {name} = useParams();

    const [blog, setBlog] = useState({})
    
    useEffect(()=>{
        let blogService = new BlogService()
        blogService.getByBlogName(name).then(result=>setBlog(result.data.data))
    }, [])

    return (
                        
        
<div>

    <h1>Blog Düzenleme</h1>
    <h3>Düzenlenen Blog: "Blog Number {blog.id}"</h3>
        <div class="form-group">
            <label class="control-label col-md-2">Blog Adı</label>
            <div class="col-md-10">
                
                    <Input defaultValue={blog.productName}/>

                <span class="field-validation-valid text-danger" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-md-2">Blog İçeriği</label>
            <div class="col-md-10">
                
<Input defaultValue={blog.content}/>
                <span class="field-validation-valid text-danger" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
                <input type="submit" value="Kaydet" class="btn btn-save" />
            </div>
        </div>
</div>


    )
    }
