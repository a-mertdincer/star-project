package com.mert.microblog.repositories;

import com.mert.microblog.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<User, Long>{

}
