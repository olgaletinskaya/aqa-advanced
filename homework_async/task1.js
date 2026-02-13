function printTextAfterDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printTextAfterDelay("Hello after 2 seconds", 2000);
