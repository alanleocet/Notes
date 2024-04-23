// Get the textarea element
const textarea = document.querySelector('textarea');

// Listen for the Ctrl+Shift+S shortcut
document.addEventListener('keydown', async function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault(); // Prevent the default save behavior
        const fileHandle = await window.showSaveFilePicker({
            types: [{
                description: 'Text Files',
                accept: { 'text/plain': ['.txt'] },
            }],
        });
        const fileStream = await fileHandle.createWritable();
        await fileStream.write(new Blob([textarea.value], { type: 'text/plain' }));
        await fileStream.close();
    }
});