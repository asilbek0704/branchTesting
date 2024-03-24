const text = document.querySelector('p'),
  btn = document.querySelector('button');

function* randomHashGen() {
  while(true) {
     yield text.textContent = Math.random().toString(36).substring(2, 15) + new Date().getTime().toString(36);
  }
}

const randomHash = randomHashGen();


btn.addEventListener('click', () => randomHash.next());