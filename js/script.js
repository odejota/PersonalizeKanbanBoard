// function log(msg) {
//     console.log('• ' + msg)
// };

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

// ---------- DRAG CARDS ----------

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
});

function dragstart() {
    // log('Drag Started');

    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    // this == card
    this.classList.add('dragging');
}

function drag() {
    // log('Dragging');
}

function dragend() {
    // log('Drag Ended');

    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

    this.classList.remove('dragging');
}

// ---------- PLACE DROP CARDS ----------

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
});

function dragenter() {
    // log('Dropzone Enter');
};

function dragover() {
    // log('Dropzone Over');

    // this == dropzone
    this.classList.add('over');

    const cardDragged = document.querySelector('.dragging');

    this.appendChild(cardDragged);
};

function dragleave() {
    // log('Dropzone Leave');

    this.classList.remove('over');
};

function drop() {
    // log('Dropped');

    this.classList.remove('over');
};