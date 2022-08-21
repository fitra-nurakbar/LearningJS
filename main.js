let form = document.querySelector("#form");
let input = document.querySelector("#input");
let post = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  acceptData();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    alert("Post cannot be blank");
    console.log("failure");
  } else {
    createPosts();
    console.log("succes");
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
};

let createPosts = () => {
  post.innerHTML += `
  <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
  </span>
</div>
     `;
  input.value = "";
};

let deletePost = (e) => {
  let conf = confirm("Delete this post?");
  conf === true ? e.parentElement.parentElement.remove() : "";
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
