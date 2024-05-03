const postsContainer = document.getElementById("posts-container"); // post will go in this div
const postList = JSON.parse(localStorage.getItem('oldPosts'));

//iterate through postList and make a post for each
for (let i=0; i < postList.length; i++) {
  const currentPost = postList[i];

  // create elements
  const postContainer = document.createElement("div");
  const postTitle = document.createElement("h2");
  const postComment = document.createElement("p");
  const postAuthor = document.createElement("h3");

  // style/add text to elements
  postContainer.setAttribute("class", "post-card shadow");
  postTitle.innerHTML = currentPost.title;
  postComment.innerHTML = currentPost.comment;
  postAuthor.innerHTML = "Author: " + currentPost.author;

  // display elements
  postsContainer.prepend(postContainer);
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postComment);
  postContainer.appendChild(postAuthor);
}