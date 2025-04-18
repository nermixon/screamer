const video = document.getElementById("screamer");

window.addEventListener("load", () => {
  video.muted = false;
  video.volume = 1.0;

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.error("Автоплей заблокирован. Попробуй снять мут или дать фокус в другом окне.");
    });
  }
});
