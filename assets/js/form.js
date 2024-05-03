const nameInput = document.getElementById('username');
const titleInput = document.getElementById('ptitle');
const commentInput = document.getElementById('pcomment');
const submit = document.getElementById('submit');

function savePost() {
  // get saved array from local storage or make an empty array if none exists
  let oldPosts = JSON.parse(localStorage.getItem('oldPosts')) || [];

  // create a new post
  let newPost = {
    title : titleInput.value,
    comment : commentInput.value,
    author : nameInput.value,
  };

  // push new post to the array and put array back in storage
  oldPosts.push(newPost);
  localStorage.setItem('oldPosts', JSON.stringify(oldPosts));
}

submit.addEventListener('click', function (event) {
  event.preventDefault();
  savePost();
  location.href = "./././blog.html"
});


