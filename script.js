const btn = document.getElementById("start-btn");
const video = document.getElementById("vid");
const audio = document.getElementById("sfx");

window.addEventListener("load", () => {
  setTimeout(() => {
    btn.click();  // Автоматическое нажатие кнопки через 0.1 секунды
  }, 100);  // Задержка 0.1 секунды
});

btn.addEventListener("click", async () => {
  btn.style.display = "none";
  video.style.display = "block";

  try {
    await video.play();
    await audio.play();
  } catch (err) {
    console.error("Ошибка запуска медиа:", err);
  }

  // Переход в fullscreen
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen().catch(() => {});
  }
});
