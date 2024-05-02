const posts = document.getElementById("posts");

function createPost() {
  const post = document.createElement("div");
  post.setAttribute("class", "post-card shadow");
  posts.appendChild(post);

  const postTitle = document.createElement("h2");
  postTitle.innerHTML = "akjsdflakjdfkjlasjd";
  post.appendChild(postTitle);

  const postComment = document.createElement("p");
  postComment.innerHTML = "lkhlasdfasdg aklsdjf lajsdl lkasdkjf asdfalkjs dflasdkljflka sdfks ldkf;lkasdfajkdsf kaljdsf ak"
  post.appendChild(postComment)

  const postAuthor = document.createElement("h3");
  postAuthor.innerHTML = "Author: "+ "lkhl"
  post.appendChild(postAuthor)
}

createPost();
createPost();
createPost();