const btn = document.getElementById("start-btn");
const video = document.getElementById("vid");
const audio = document.getElementById("sfx");

// Эмулируем клик по кнопке через 0.1 секунды после загрузки страницы
window.addEventListener("load", () => {
  setTimeout(() => {
    // Эмуляция клика по кнопке
    btn.click();
  }, 100);  // Задержка 0.1 секунды, чтобы сразу эмулировать клик
});

btn.addEventListener("click", async () => {
  btn.style.display = "none"; // Скрыть кнопку
  video.style.display = "block"; // Показать видео на весь экран

  try {
    await video.play();  // Воспроизведение видео
    await audio.play();  // Воспроизведение звука
  } catch (err) {
    console.error("Ошибка запуска медиа:", err);
  }

  // Переход в fullscreen
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen().catch(() => {});
  }
});
