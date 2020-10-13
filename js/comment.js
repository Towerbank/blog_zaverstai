let commentForm = document.querySelector('.comments__form');
let commentList = document.querySelector('.comments__list');
let commentArea = document.querySelector('.comments__area');
let commentName = document.querySelector('.input-name');
let commentEmail = document.querySelector('.input-email');
let commentUser = document.querySelector('.comment__user');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('comments__comment');

    let newUser = document.createElement('div');
    newUser.classList.add('comment__user');

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