const React = require('react');

module.exports = function Book({ book, user }) {
  const isMine = book.userId === user.id;
  const likes = book.Likes.length;
  let isLiked;
  book.Likes.forEach((like) => {
    if (like.userId === user.id) isLiked = true;
  });
  return (
    <div className="card" style={{ width: `${18}rem` }}>
      <img src={book.cover} className="card-img-top" alt="cover" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
        <div className="likes-count">{likes}</div>
        {isLiked ? (
          <i
            className="bi bi-heart-fill"
            data-type="unlike-button"
            data-bookId={`${book.id}`}
          />
        ) : (
          <i
            className="bi bi-heart"
            data-type="like-button"
            data-bookid={`${book.id}`}
          />
        )}
        {isMine && (
          <a
            href={`/books/edit/${book.id}`}
            className="btn btn-primary"
            data-type="edit-link"
          >
            Редактировать
          </a>
        )}
      </div>
    </div>
  );
};
