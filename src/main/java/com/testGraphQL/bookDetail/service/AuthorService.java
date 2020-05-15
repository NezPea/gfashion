package com.testGraphQL.bookDetail.service;

import com.testGraphQL.bookDetail.entity.Author;

public class AuthorService {
    public static Author getById(String id) {
        return Author.AuthorList
                .stream()
                .filter(author -> author.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
