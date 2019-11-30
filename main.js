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
const contact = document.querySelector("#contact");
const contactTxt = document.querySelector("#contact a");

hero.style.height = h + "px";
contact.addEventListener("mouseover", () => {
  contactTxt.style.color = 'white';
});
contact.addEventListener("mouseout", () => {
  contactTxt.style.color = '#F84848';
});