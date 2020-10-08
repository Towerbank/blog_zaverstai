let commentForm = document.querySelector('.comments__form');
let commentList = document.querySelector('.comments__list');
let commentArea = document.querySelector('.comments__area');
let commentName = document.querySelector('.input-name');
let commentEmail = document.querySelector('.input-email');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    let newName = document.createElement('p');
    let newText = document.createElement('p');
    newName.classList.add('comments__name');
    newText.classList.add('comments__text');
    newText.textContent = commentArea.value;
    newName.textContent = commentName.value;
    newComment.classList.add('comments__comment');
    newComment.append(newName);
    newComment.append(newText);
    commentList.append(newComment);
    commentArea.value = '';
    commentName.value = '';
};