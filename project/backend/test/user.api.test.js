import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../index.js'; // the actual path of backend file

const expect = chai.expect;
chai.use(chaiHttp);

describe('Books REST API', () => {
    let insertedBookId

    // Test GET /books
    it('should GET all books', (done) => {
        chai
        .request(server)
        .get('/books')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
        });
    });

    //Test POST /books
    it('should POST a new book', (done) => {
        const newBook = {
            title: 'New Book 2',
            desc: 'Description of the new book 2',
            price: 19.99,
            cover: 'book-cover-url 2',
        };

        chai
        .request(server)
        .post('/books')
        .send(newBook)
        .end((err, res) => {
            expect(res).to.have.status(200);
            insertedBookId = res.body.data.insertId;
            done();
        });
    });

    // Test PUT /books/:id
    it('should UPDATE an existing book', (done) => {
        const updatedBook = {
            title: 'Updated Book',
            desc: 'Updated description',
            price: 24.99,
            cover: 'updated-cover-url',
        };

        chai
        .request(server)
        .put(`/books/${insertedBookId}`)
        .send(updatedBook)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.equal('Book has been updated successfully.');
            done();
        });
    });

    // Test DELETE /books/:id
    it('should DELETE an existing book', (done) => {
        chai
        .request(server)
        .delete(`/books/${insertedBookId}`)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.equal('Book has been deleted successfully.');
            done();
        });
    });

});

