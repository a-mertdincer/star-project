package com.mert.microblog.repositories;

import com.mert.microblog.models.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentsRepository extends CrudRepository<Comment, Long> {
}
