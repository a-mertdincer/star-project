package com.mert.microblog.repositories;

import com.mert.microblog.models.Blog;
import org.springframework.data.repository.CrudRepository;

public interface BlogsRepository extends CrudRepository<Blog, Long> {
}
