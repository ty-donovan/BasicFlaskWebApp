deleteNote = (id) => {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({ noteId: id }),
    }).then((_res) => {
        // reload window
        window.location.href = '/';
    });
}