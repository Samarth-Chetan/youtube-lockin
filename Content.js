const lockInImages = [
  "https://play-lh.googleusercontent.com/xOyRzU5xkVgui6fPc6ZvwSZdfJjfrZs0fGsb3cM7ZJ9Wz49aFY3DwbIWONz-mPUC3w",
  "https://i.etsystatic.com/50035709/r/il/c2b80c/5940484816/il_fullxfull.5940484816_9nzh.jpg",
  "https://bsatroop794.org/wp-content/uploads/lock-in.png",
  "https://i.ytimg.com/vi/6TxjepBFdNQ/hq720.jpg",
  "https://quotefancy.com/media/wallpaper/3840x2160/9133381-Lock-in-Wallpaper.jpg",
  "https://quotefancy.com/media/wallpaper/3840x2160/8046267-STAY-FOCUSED-Wallpaper.jpg",
  "https://media.istockphoto.com/id/1830248795/photo/stay-focused-to-get-results.jpg?s=612x612&w=0&k=20&c=zCILuJFofXK6FskRIsVS-v0zuZI47wcE63srb5HtdZg=",
  "https://t4.ftcdn.net/jpg/04/28/62/09/360_F_428620925_qtFOLaNh8obomWtJOglxRBNFnfhMtW5Z.jpg",
  "https://blog.kavaliro.com/hubfs/Stock%20images/Back%20to%20Work%20sign%20with%20clouds%20and%20sky%20background.jpeg",
  "https://media.licdn.com/dms/image/v2/D5612AQGQtOr3vXZhFw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726068573288?e=2147483647&v=beta&t=uoDnFXT6mgNZ66qc4SRa7QDXAb3a6ruLgG2pLK5Gh_A"
];

function pick() {
  return lockInImages[Math.floor(Math.random() * lockInImages.length)];
}

function replaceImg(img) {
  if (!img || img.dataset.locked === "1") return;

  // YouTube often uses srcset; kill it or it will override your src
  img.removeAttribute("srcset");
  img.removeAttribute("sizes");

  img.src = pick();
  img.dataset.locked = "1";
}

// Run once on existing images
document.querySelectorAll("img").forEach(replaceImg);

// Re-apply whenever YouTube adds/replaces nodes
const obs = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node.nodeType !== 1) continue;

      if (node.tagName === "IMG") replaceImg(node);
      node.querySelectorAll?.("img").forEach(replaceImg);
    }
  }
});

obs.observe(document.documentElement, { childList: true, subtree: true });

// Also re-run periodically because YouTube sometimes rewrites existing img attrs
setInterval(() => {
  document.querySelectorAll("img").forEach((img) => {
    // If YouTube overwrote it, re-lock it
    if (img.dataset.locked === "1" && !lockInImages.includes(img.src)) {
      img.dataset.locked = "0";
      replaceImg(img);
    }
  });
}, 1000);
