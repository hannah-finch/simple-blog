const nameInput = document.getElementById('username');
const titleInput = document.getElementById('ptitle');
const commentInput = document.getElementById('pcomment');
const submit = document.getElementById('submit');

function savePost() {
  if ((nameInput.value || titleInput.value || commentInput.value) == "") {
    window.prompt('Please complete the form'); // If any part of form is blank, prompt to complete

  } else {
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
    location.href = "./././blog.html";
  }
}

submit.addEventListener('click', function (event) {
    event.preventDefault();
    savePost();
});