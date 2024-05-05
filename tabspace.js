textarea.addEventListener('keydown', function (event) {
    // Check if the pressed key is the tab key
    if (event.key === 'Tab') {
        // Prevent the default behavior of the tab key (moving focus)
        event.preventDefault();

        // Get the current value of the textarea
        const value = this.value;

        // Get the start and end positions of the selected text
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Define the tab character (equivalent to 4 spaces)
        const tab = '    ';

        // Update the value of the textarea by inserting the tab character
        this.value = value.slice(0, start) + tab + value.slice(end);

        // Move the cursor position
        this.selectionStart = this.selectionEnd = start + tab.length;
    }
});