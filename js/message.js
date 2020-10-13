let writeArea = document.querySelector('.write__comment');
let writeButton = document.querySelector('.write__button');

writeArea.oninput = function () {
    if (writeArea.value.length < 10 || writeArea.value.length > 200) {
        writeArea.classList.add('warning');
        writeButton.disabled = true;
    } else {
        writeArea.classList.remove('warning');    
        writeButton.disabled = false;
    }
  };
 