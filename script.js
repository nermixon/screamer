const btn = document.getElementById("start-btn");
const video = document.getElementById("vid");
const audio = document.getElementById("sfx");

// Эмулируем клик по кнопке через 2 секунды после загрузки страницы
window.addEventListener("load", () => {
  setTimeout(() => {
    // Клик по кнопке
    btn.click();
  }, 2000);  // Задержка 2 секунды, чтобы дать время на прогрузку
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
