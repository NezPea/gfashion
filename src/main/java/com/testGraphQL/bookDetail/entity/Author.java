package com.testGraphQL.bookDetail.entity;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class Author {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    private String id;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    private String firstName;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    private String lastName;

    public static List<Author> AuthorList = new ArrayList<Author>(){{

//        add(Author.builder().id("author-1").firstName("First Name 1").lastName("L1").build());
//        add(Author.builder().id("author-2").firstName("First Name 2").lastName("L2").build());
//        add(Author.builder().id("author-3").firstName("First Name 3").lastName("L3").build());
    }};

}
