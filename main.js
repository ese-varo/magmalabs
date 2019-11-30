window.onscroll = () => {
  const nav = document.querySelector('#nav');
  if (this.scrollY <= 10) {
    nav.style.backgroundColor = 'transparent';
  } else {
    nav.style.backgroundColor = '#362F2F';
  }
};

let h = window.innerHeight;

const hero = document.querySelector('#hero');
const exceptional = document.querySelector('#exceptional');
const conceptToSolution = document.querySelector('#conceptToSolution'); 

hero.style.height = h + "px";