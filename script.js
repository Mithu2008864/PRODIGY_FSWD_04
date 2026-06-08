// LIKE FUNCTION
function toggleLike(el) {
  let post = el.closest(".post");

  el.classList.toggle("liked");

  let heart = document.createElement("div");
  heart.className = "heart-popup";
  heart.innerHTML = "❤️";

  post.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 700);
}

// COMMENT
function openComment() {
  document.getElementById("commentBox").style.display = "block";
}

function closeComment() {
  document.getElementById("commentBox").style.display = "none";
}

// SAVE POST
function savePost(el) {
  let post = el.closest(".post");
  let postId = post.getAttribute("data-id");

  let saved = JSON.parse(localStorage.getItem("savedPosts")) || [];

  if (saved.includes(postId)) {
    saved = saved.filter(id => id !== postId);
    alert("Removed from saved");
  } else {
    saved.push(postId);
    alert("Post saved");
  }

  localStorage.setItem("savedPosts", JSON.stringify(saved));
}

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}