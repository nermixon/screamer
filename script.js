const btn = document.getElementById("start-btn");
const video = document.getElementById("vid");
const audio = document.getElementById("sfx");

window.addEventListener("load", () => {
  setTimeout(() => {
    btn.click(); // Клик по кнопке через 0.1 секунды после загрузки страницы
  }, 100);
});

btn.addEventListener("click", async () => {
  btn.style.display = "none"; // Прячем кнопку
  video.style.display = "block"; // Показываем видео

  try {
    await video.play(); // Запуск видео
    await audio.play(); // Запуск звука
  } catch (err) {
    console.error("Ошибка запуска медиа:", err);
  }

  // Переход в полноэкранный режим
  if (video.requestFullscreen) {
    video.requestFullscreen().catch(() => {});  // Пробуем сделать видео полноэкранным
  } else if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();  // Если видео не поддерживает полноэкранный режим, делаем для документа
  }
});
