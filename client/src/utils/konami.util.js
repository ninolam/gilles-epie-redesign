const konami = (callback) => {
  const pattern = [
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
  ];
  let keys = [];
  window.addEventListener("keydown", (e) => {
    if (e.getModifierState("CapsLock")) {
      pattern[8] = "B";
      pattern[9] = "A";
    } else {
      pattern[8] = "b";
      pattern[9] = "a";
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
};

export default konami;
