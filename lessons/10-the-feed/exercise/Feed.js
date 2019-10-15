import React, {useEffect, useState, useReducer} from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

function Feed() {
  const [posts, setPosts] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [time, setTime] = useState(Date.now())
  const [limit, setLimit] = useState(3)

  // Initial Load
  useEffect(() => {
    let isCurrent = true;
    loadFeedPosts(time, limit).then(posts => {
      if (isCurrent) {
        setPosts(posts);
      }
    })
    return () => {
      isCurrent = false
    }
  }, [time, limit]);

  useEffect(() => {
    subscribeToNewFeedPosts(time, posts => {
       setNewPosts(posts)
    });

  }, [limit, time]);

  const handleViewMore = (e) => {
    e.preventDefault();
    loadFeedPosts(time, limit + 3).then(posts => {
      setPosts(posts)
    });
  }

  return (
    <div className="Feed">
      {newPosts.length > 0 &&
        <div className="Feed_button_wrapper">
          <button
            className="Feed_new_posts_button icon_button"
            onClick={(e) => {
              setTime(Date.now())
              setLimit(limit + newPosts.length)
            }}
          >
            View {newPosts.length} New Posts
          </button>
        </div>
      }

      {posts.map((post, index) =>  <FeedPost key={`post-${index}`} post={post} />)}

      <div className="Feed_button_wrapper">
        <button
          onClick={handleViewMore}
          className="Feed_new_posts_button icon_button"
        >
          View More
        </button>
      </div>
    </div>
  )
}

// you can delete this
const fakePost = {
  createdAt: Date.now() - 10000,
  date: "2019-03-30",
  message: "Went for a run",
  minutes: 45,
  uid: "0BrC0fB6r2Rb5MNxyQxu5EnYacf2"
}

