console.log('text file export working fine!')

// Get the textarea element
const textarea = document.querySelector('textarea');

// Listen for the Ctrl+Shift+S shortcut
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        event.preventDefault(); // Prevent the default save behavior
        exportToTextFile(textarea.value);
    }
});

// Function to export text as a file
function exportToTextFile(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.txt'; // Set the desired file name
    a.click();
    URL.revokeObjectURL(url);
}