<<<<<<< HEAD
class BookReview {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.notes = {};
        this.rating = 0;
    }

    addNotes(pageNum, note) {
        if (!(this.notes[pageNum])){
            this.notes[pageNum] = note;
        }
        else {
            this.notes[pageNum] += ` ${note}`;
        }
    }

    addRating(rating) {
        if (rating > 5) {
            throw Error;
        }
        else {
            this.rating = rating;
        }
    }
}
=======
class BookReview {}
>>>>>>> 9ebcacc6d65349e394064eda4e317f144d6d8178
module.exports = { BookReview };
