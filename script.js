//your code here
const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggedElement = draggable;
        setTimeout(() => {
            draggable.style.display = 'none';
        }, 0);
    });

    draggable.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedElement = null;
            draggable.style.display = 'block';
        }, 0);
    });

    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    draggable.addEventListener('drop', () => {
        if (draggedElement) {
            const tempBackground = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = draggable.style.backgroundImage;
            draggable.style.backgroundImage = tempBackground;
        }
    });
});
