package com.testGraphQL.bookDetail.service;

import com.testGraphQL.bookDetail.entity.Book;

public class BookService {
    public static Book getById(String id){
        return Book.BookArray
                .stream()
                .filter(book -> book.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
