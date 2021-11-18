package com.mert.microblog.controllers;


import com.mert.microblog.models.Blog;
import com.mert.microblog.repositories.BlogsRepository;
import com.mert.microblog.services.BlogServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BlogsController {

    @Autowired
    BlogServices blogServices;

    @GetMapping("/getall")
    public Iterable<Blog> getAll(){
        return blogServices.getAll();
    }

    @PostMapping("/add")
    public void add(Blog blog)
    {blogServices.add(blog);}

}

