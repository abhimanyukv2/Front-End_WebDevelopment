const transcript = document.querySelector("#collapser");
transcript.classList.add("collapse");
const transcriptBtn = document.querySelector("#transcript-toggle")

transcriptBtn.addEventListener("click", () => {
    transcript.classList.contains("collapes")
        ? (transcriptBtn.innerHTML = "Expand transcript"):(transcriptBtn.innerHTML = "Collapse transcript");
    transcript.classList.toggle("collapse")
});