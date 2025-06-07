import confetti from "canvas-confetti";

export const launchHearts = () => {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
  const scalar = 2;

  const heartShapes = [
    confetti.shapeFromText({ text: "❤️", scalar }),
    confetti.shapeFromText({ text: "💖", scalar }),
    confetti.shapeFromText({ text: "💕", scalar }),
    confetti.shapeFromText({ text: "💘", scalar }),
  ];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 90,
      spread: 60,
      origin: { y: 0 },
      scalar,
      // Sorteia uma das shapes para cada disparo
      shapes: [heartShapes[Math.floor(Math.random() * heartShapes.length)]],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
