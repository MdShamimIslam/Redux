// export const nextBooksId = (books) => {
//   const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
//   return maxId + 1;
// };


export const nextBooksId = (books) => {
    const highestId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);

    return String(parseInt(highestId) + 1);
    
};