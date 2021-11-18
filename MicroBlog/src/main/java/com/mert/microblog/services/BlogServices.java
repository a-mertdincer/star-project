package com.mert.microblog.services;

import com.mert.microblog.models.Blog;

import java.util.List;

public interface BlogServices {

    List<Blog> getAll();
    void add(Blog blog);
}
