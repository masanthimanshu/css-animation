const mouseBlob = document.getElementById("mouse_blob");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  mouseBlob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
};

document.querySelector("h1").onmouseover = (event) => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((e, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations > event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 2;
  }, 50);
};
