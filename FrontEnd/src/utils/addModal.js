

export const createModal = (message, error = "") => {
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.id = 'modal_container';

    let modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');

    let heading = document.createElement('h1');
    heading.innerText = "Something went wrong.";

    let modalContent = document.createElement('p');
    modalContent.innerText = message;

    let errorContent = document.createElement('p');
    errorContent.classList.add('small-text');
    errorContent.innerText = error;

    let confirmButton = document.createElement('button');
    confirmButton.classList.add('button');
    confirmButton.innerText = 'Got It';
    confirmButton.addEventListener('click', ()=> {
        document.querySelector('.modal-container').remove();
    })

    modalDiv.appendChild(heading);
    modalDiv.appendChild(modalContent);
    modalDiv.appendChild(errorContent);
    modalDiv.appendChild(confirmButton);

    modalContainer.appendChild(modalDiv);

    document.querySelector('body').appendChild(modalContainer);
    
}