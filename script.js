const fontSizeInput = document.getElementById('fontSize');
const fontUnitSelect = document.getElementById('fontUnit');
const applyButton = document.getElementById('applyButton');
const previewSection = document.getElementById('previewSection');


function applyFontSize() {
    const fontSize = fontSizeInput.value;
    const fontUnit = fontUnitSelect.value;

    previewSection.querySelector('h1').style.fontSize = `${fontSize * 2}${fontUnit}`;
    previewSection.querySelector('h2').style.fontSize = `${fontSize * 1.8}${fontUnit}`;
    previewSection.querySelector('h3').style.fontSize = `${fontSize * 1.6}${fontUnit}`;
    previewSection.querySelector('h4').style.fontSize = `${fontSize * 1.4}${fontUnit}`;
    previewSection.querySelector('h5').style.fontSize = `${fontSize * 1.2}${fontUnit}`;
    previewSection.querySelector('h6').style.fontSize = `${fontSize}${fontUnit}`;
    previewSection.querySelector('p').style.fontSize = `${fontSize}${fontUnit}`;
    previewSection.querySelector('blockquote').style.fontSize = `${fontSize * 0.9}${fontUnit}`;
    previewSection.querySelector('small').style.fontSize = `${fontSize * 0.8}${fontUnit}`;
}


applyButton.addEventListener('click', applyFontSize);


applyFontSize();