let commentForm = document.querySelector('.comments__form');
let commentList = document.querySelector('.comments__list');
let commentArea = document.querySelector('.comments__area');
let commentName = document.querySelector('.comments__input-name');
let commentEmail = document.querySelector('.comments__input-email');
let commentUser = document.querySelector('.comments__user');
let commentButton = document.querySelector('.comments__button');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('comments__comment');

    let newUser = document.createElement('div');
    newUser.classList.add('comments__user');

    let newEmail = document.createElement('img');
    newEmail.classList.add('comments__img');

    let newName = document.createElement('p');
    newName.classList.add('comments__name');

    let newText = document.createElement('p');
    newText.classList.add('comments__text');

    newText.textContent = commentArea.value;
    newName.textContent = commentName.value;

    newUser.append(newEmail);
    newUser.append(newName);

    newComment.append(newUser);
    newComment.append(newText);
    commentList.append(newComment);

    commentArea.value = '';
    commentName.value = '';
    commentEmail.value = '';
};


commentArea.oninput = function () {
    if (commentArea.value.length < 10 || commentArea.value.length > 200) {
        commentArea.classList.add('warning');
        commentButton.disabled = true;
    } else {
        commentArea.classList.remove('warning');    
        commentButton.disabled = false;
    }
  };
 