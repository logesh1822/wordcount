
document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const wordCount = document.getElementById("word-count");

    textInput.addEventListener("input", function () {
        const text = textInput.value.trim();
        const words = text.split(/\s+/);
        const wordCountValue = words.length === 1 && words[0] === "" ? 0 : words.length;
        wordCount.textContent = wordCountValue;
    });
});
