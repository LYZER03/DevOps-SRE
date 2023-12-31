import { getBooks, endConnection ,createBook , deleteBook, updateBook } from "../index.js";
import { expect } from 'chai';


describe('Books BACK TEST', () => {

    let insertedBookId;

    // Test GET /books
    it('should GET all books', (done) => {
        const mockRequest = {};
        const mockResponse = {
            json: (result) => {
                expect(result).to.be.an('array'); // Assuming the result is an array of books
                done();
            }
        };

        getBooks(mockRequest, mockResponse);

    });

    // Test POST /books
    it('should create a new book', (done) => {
        const mockRequest = {
            body: {
                id : 1,
                title: "New Book",
                desc: "Description of the new book",
                price: 19.99,
                cover: "book-cover.jpg"
            }
        };
        const mockResponse = {
            json: (result) => {
                expect(result.successMessage).to.equal("Book has been created successfully.");
                insertedBookId = mockRequest.body.id
                done();
            }
        };

        createBook(mockRequest, mockResponse);
    });

    // Test PUT /books/:id
    it('should update an existing book', (done) => {
        const mockRequest = {
            params: {
                id: 1 // Provide a valid book ID
            },
            body: {
                title: "Updated Book",
                desc: "Updated description",
                price: 29.99,
                cover: "updated-cover.jpg"
            }
        };
        const mockResponse = {
            json: (result) => {
                expect(result).to.equal("Book has been updated successfully.");
                done();
            }
        };

        updateBook(mockRequest, mockResponse);
    });

    // Test DELETE /books/:id
    it('should delete an existing book', (done) => {
        const mockRequest = {
            params: {
                id: 1 // Provide a valid book ID
            }
        };
        const mockResponse = {
            json: (result) => {
                expect(result).to.equal("Book has been deleted successfully.");
                done();
            }
        };

        deleteBook(mockRequest, mockResponse);
    });

    // Close the connection after all tests
    after(() => {
        endConnection();
        process.exit();
    });
    
    
});


