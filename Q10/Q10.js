function countWords(text) {
    return text.trim().split(/\s+/).length;
}

function toUpperCase(text) {
    return text.toUpperCase();
}

function toLowerCase(text) {
    return text.toLowerCase();
}

function checkSubstring(text, substring) {
    return text.includes(substring);
}

function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = message;
}

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const countWordsButton = document.getElementById('countWords');
    const toUpperCaseButton = document.getElementById('toUpperCase');
    const toLowerCaseButton = document.getElementById('toLowerCase');
    const checkSubstringButton = document.getElementById('checkSubstring');
    const substringInput = document.getElementById('substringInput');

    countWordsButton.addEventListener('click', () => {
        const text = textInput.value;
        const wordCount = countWords(text);
        displayResult(`Word Count: ${wordCount}`);
    });

    toUpperCaseButton.addEventListener('click', () => {
        const text = textInput.value;
        const upperText = toUpperCase(text);
        displayResult(`Upper Case Text: ${upperText}`);
    });

    toLowerCaseButton.addEventListener('click', () => {
        const text = textInput.value;
        const lowerText = toLowerCase(text);
        displayResult(`Lower Case Text: ${lowerText}`);
    });

    checkSubstringButton.addEventListener('click', () => {
        const text = textInput.value;
        const substring = substringInput.value;
        const result = checkSubstring(text, substring) ? 'Substring found!' : 'Substring not found!';
        displayResult(result);
    });
});
