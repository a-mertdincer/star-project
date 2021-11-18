import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Table, Button, Message } from 'semantic-ui-react'



export default function ProductList() {


    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/api/getall")
        .then(response => response.json())
        .then(response => setBlogs(response))
        
    }, [])


    return (
        <div>
            <h1>BLOGLARIM</h1>


                    {blogs.map(blog=>(
                           <Message>
                           <Message.Header>Blog Number {blog.id}</Message.Header>
                           <p>
                            {blog.content}
                           </p>
                           <Link to={`/blogs/edit/${blog.id}`}><Icon circular name='edit'/></Link>
                           <Link><Icon circular link color='red' name='delete'/></Link>
                         </Message>
                       ) 
                            )}
 
            <Button><Link to={`/blogs/addnew/`}>Yeni Blog Ekle</Link></Button>
        </div>
    )
}
