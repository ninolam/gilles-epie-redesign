import { useCallback } from "react";

const konami = (callback) => {
  const patterns = [
    [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
      "Enter",
    ],
    [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
      "s",
      "t",
      "a",
      "r",
      "t",
    ],
  ];

  patterns.forEach((pattern) => {
    let keys = [];
    window.addEventListener("keydown", (e) => {
      if (e.getModifierState("CapsLock")) {
        patterns[0][8] = "B";
        patterns[0][9] = "A";
        patterns[1][8] = "B";
        patterns[1][9] = "A";
        patterns[1][10] = "S";
        patterns[1][11] = "T";
        patterns[1][12] = "A";
        patterns[1][13] = "R";
        patterns[1][14] = "T";
      } else {
        patterns[0][8] = "b";
        patterns[0][9] = "a";
        patterns[1][8] = "b";
        patterns[1][9] = "a";
        patterns[1][10] = "s";
        patterns[1][11] = "t";
        patterns[1][12] = "a";
        patterns[1][13] = "r";
        patterns[1][14] = "t";
      }
      keys.push(e.key);
      if (
        keys[keys.length - 1] !== pattern[keys.length - 1] ||
        keys.length > pattern.length
      ) {
        keys = [];
      } else {
        if (keys.length === pattern.length) {
          callback();
        }
      }
    });
  });
};

export default konami;
