import React from 'react'

const Fetcher = ({ submitUrl }) => {
  return (
    <div>
      <button onClick={() => submitUrl('users')}>users</button>
      <button onClick={() => submitUrl('posts')}>posts</button>
      <button onClick={() => submitUrl('comments')}>comments</button>
    </div>
  )
}

export default Fetcher