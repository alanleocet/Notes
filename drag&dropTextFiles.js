function allowDrop(event) {
    event.preventDefault();
  }

  function dropFile(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function () {
        document.querySelector("textarea").value = reader.result;
      }
      reader.readAsText(file);
    }
  }