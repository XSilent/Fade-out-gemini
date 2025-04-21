const hideGemini = () => {
    // Methode 1: Der spezifische Gemini-Container
    document.querySelectorAll('div[data-content-feature="1"]').forEach(el => {
        console.log("[HideGemini] Removing data-content-feature block");
        el.style.display = 'none';
    });

    [...document.querySelectorAll("div")]
  .filter(div =>
    div.innerText?.toLowerCase().includes("ai overview") &&
    div.clientHeight < 1000 &&
    div.querySelectorAll("a").length < 10 &&
    !div.closest("#rhs") // ➜ RHS = Right Hand Side (Knowledge Panel!)
  )
  .forEach(div => {
    console.log("[HideGemini] Removing main AI block");
    div.style.display = "none";
  });
};

// Observer with longer runtime
const observer = new MutationObserver(() => hideGemini());

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Fallback-Timer: all 20ms for the first 5 seconds
let ticks = 0;
const interval = setInterval(() => {
    hideGemini();
    ticks++;
    if (ticks > 10) clearInterval(interval); // stop after 5 seconds
}, 20);