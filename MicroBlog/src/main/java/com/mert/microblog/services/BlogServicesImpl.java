package com.mert.microblog.services;

import com.mert.microblog.models.Blog;
import com.mert.microblog.repositories.BlogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogServicesImpl implements BlogServices {

    @Autowired
    BlogsRepository blogsRepository;

    @Override
    public List<Blog> getAll() {
        List<Blog> blogs = new ArrayList<>();
        blogsRepository.findAll().iterator().forEachRemaining(blogs::add);
        return blogs;
    }

    @Override
    public void add(Blog blog) {
        this.blogsRepository.save(blog);
    }
}
