document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("registerModal");
  const registerBtn = document.getElementById("registerNow");

  if (!localStorage.getItem("acb88_registered")) {
    setTimeout(() => {
      modal.classList.add("active");
    }, 1500);
  }

  registerBtn.addEventListener("click", () => {
    localStorage.setItem("acb88_registered", "true");
    modal.classList.remove("active");
  });
});
