package com.mert.microblog;

import com.mert.microblog.models.Blog;
import com.mert.microblog.models.User;
import com.mert.microblog.services.BlogServices;
import com.mert.microblog.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SeedData implements CommandLineRunner {

    @Autowired
    UserServices userServices;

    @Autowired
    BlogServices blogServices;

    @Override
    public void run(String... args) throws Exception {

        User newUser = new User();
        newUser.setHandle("johndoe");
        newUser.setEmail("blabla@blabla.com");
        newUser.setPassword("123asd");
        userServices.save(newUser);

        Blog newBlog = new Blog();
        newBlog.setContent("Deneme yazisi");
        newBlog.setUser(newUser.getHandle());
        blogServices.add(newBlog);

        Blog newBlog2 = new Blog();
        newBlog2.setContent("Placeholder");
        newBlog2.setUser(newUser.getHandle());
        blogServices.add(newBlog2);


    }
}
