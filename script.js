document.getElementById("summarizeBtn").addEventListener("click", function () {
  let text = document.getElementById("inputText").value.trim();

  if (text === "") {
    alert("Please enter some text.");
    return;
  }

  let sentences = text.split(". ");
  let summary =
    sentences.length > 2
      ? sentences[0] + ". " + sentences[sentences.length - 1]
      : text;

  document.getElementById("output").innerText =
    summary || "No summary available.";
});
