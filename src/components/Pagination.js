export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(pageNum => (
          <li key={pageNum} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(pageNum)}>{pageNum}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
