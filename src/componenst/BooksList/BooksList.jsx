export const BooksList = ((data) => {
    return <ul>
        {data.books.map((book) => <li key={book.id}>
            <h3>{book.name}</h3>
            <p>{book.reitng}</p>
        </li>)}
    </ul>
});