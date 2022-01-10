const openList = document.querySelector('.mobil-menu');
const openMenu = document.querySelector('.open-men').addEventListener('click', () => {
  openList.classList.toggle('active');
});


function displayWatch(){
    var t = new Date();
    const day = document.querySelector('.day').innerHTML = t.getDay();
    const hours = document.querySelector('.hours').innerHTML = t.getHours();
    const secs = document.querySelector('.min').innerHTML = t.getMinutes();
}

window.load = displayWatch();
setInterval(function(){
displayWatch();
},500);



