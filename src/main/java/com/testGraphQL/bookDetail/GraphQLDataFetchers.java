package com.testGraphQL.bookDetail;

import com.testGraphQL.bookDetail.entity.Book;
import com.testGraphQL.bookDetail.service.AuthorService;
import com.testGraphQL.bookDetail.service.BookService;
import graphql.schema.DataFetcher;
import org.springframework.stereotype.Component;

@Component
public class GraphQLDataFetchers {
    public DataFetcher getBookByIdDataFetcher() {
        return dataFetchingEnvironment -> {
            String bookId = dataFetchingEnvironment.getArgument("id");
            return BookService.getById(bookId);
        };
    }

    public DataFetcher getAuthorDataFetcher() {
        return dataFetchingEnvironment -> {
            Book book = dataFetchingEnvironment.getSource();
            String authorId = book.getAuthorId();
            return AuthorService.getById(authorId);
        };
    }
}
