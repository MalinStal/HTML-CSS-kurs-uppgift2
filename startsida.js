const form=document.querySelector('.member-form');
const openform =document.querySelector('.open-button');
const closeform = document.querySelector('.close-form');

openform.addEventListener('click', () => {
form.showModal();
})
closeform.addEventListener('click', () => {
form.close();
})