function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let current = document.getElementById('nested');
  let next = [];
  while (current || current === 0) {
    if (current.querySelector('div.target')) {
      return current.querySelector('div.target');
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}