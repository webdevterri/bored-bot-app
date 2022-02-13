document.getElementById("btn-click").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then(
      (data) =>
        document.getElementById("api-suggest").textContent = `${data.activity}`,
        document.getElementById("title").textContent = "😎 No-Longer-Bored Bot",
        document.body.classList.add("fun")
    );

});
