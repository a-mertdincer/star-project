package com.mert.microblog.services;

import com.mert.microblog.models.Blog;
import com.mert.microblog.models.User;
import com.mert.microblog.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServicesImpl implements UserServices{

    @Autowired
    UsersRepository usersRepository;


    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        usersRepository.findAll().iterator().forEachRemaining(users::add);
        return users;
    }

    @Override
    public User save(User user) {

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setHandle(user.getHandle());
        newUser.setPassword(user.getPassword());
        for(Blog b : user.getBlogs()){
            newUser.getBlogs().add(b);
        }
        return usersRepository.save(newUser);
    }
}
