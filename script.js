ocument.getElementById('meinButton').addEventListener('click', function() {
    const buttonText = this.innerText; // Text des Buttons abrufen
    document.getElementById('textDisplay').innerText = buttonText; // Text anzeigen