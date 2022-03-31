export default function Posts({ posts, loading }) {

  if(loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    )
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className="list-group-item">{post.title}</li>
      ))}
    </ul>
  )
}
