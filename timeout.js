(function () {
  const TIMEOUT_MS = 60 * 1000;
  const HOME = "toten.html";
  let timer = null;
  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      window.location.href = HOME;
    }, TIMEOUT_MS);
  }
  ["touchstart", "touchmove", "mousedown", "mousemove", "keydown", "scroll"].forEach(evt => {
    document.addEventListener(evt, resetTimer, { passive: true });
  });
  resetTimer();
})();
