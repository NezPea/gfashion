package com.testGraphQL.bookDetail.entity;

import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class Book {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    private String id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String name;

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    private int pageCount;

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    private String authorId;

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    private Author author;

    public static List<Book> BookArray = new ArrayList<Book>(){{

//        add(Book.builder().id("book-1").name("Harry Potter and the Philosopher's Stone").pageCount(100).authorId("author-1").build());
//        add(Book.builder().id("book-2").name("Moby Dick").pageCount(200).authorId("author-2").build());
//        add(Book.builder().id("book-3").name("Interview with the vampire").pageCount(400).authorId("author-3").build());
    }};
}
