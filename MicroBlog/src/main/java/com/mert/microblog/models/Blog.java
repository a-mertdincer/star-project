package com.mert.microblog.models;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "blogs")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String content;


    @JoinColumn(name = "userid")
    private String user;

    @OneToMany(mappedBy = "blog", orphanRemoval = true)
    private Set<Comment> comments = new HashSet<>();

    public Blog() {
    }

    public Blog(String content, String user) {
        this.content = content;
        this.user = user;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

}
