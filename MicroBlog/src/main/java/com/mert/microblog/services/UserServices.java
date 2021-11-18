package com.mert.microblog.services;

import com.mert.microblog.models.User;

import java.util.List;

public interface UserServices {

    List<User> findAll();
    User save(User user);
}
