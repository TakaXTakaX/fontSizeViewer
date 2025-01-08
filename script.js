const fontSizeInput = document.getElementById('fontSize');
const fontUnitSelect = document.getElementById('fontUnit');
const customTextInput = document.getElementById('customText');
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

function applyCustomText() {
    const customText = customTextInput.value || "Sample Text";

    previewSection.querySelectorAll('h1, h2, h3, h4, h5, h6, p, blockquote, small').forEach(element => {
        element.textContent = customText;
    });
}

function applyChanges() {
    applyFontSize();
    applyCustomText();
}

applyButton.addEventListener('click', applyChanges);
applyChanges();
