const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const dom = document.querySelector('.container1 h2');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill')){
        var konfirmasi = confirm("Lanjut?");

        if(konfirmasi==true){
            body.style.background = '#cbc0d3';
            body.style.color = 'black';
            body.style.transition = '2s';
        }else{
            alert("DIBATALKAN!")
        }
        
    }else{
        var konfirmasi = confirm("Lanjut?");

        if(konfirmasi==true){
        body.style.background = 'black';
        body.style.color = 'whitesmoke';
        body.style.transition = '2s';
    }else{
        alert("DIBATALKAN!")
    }
    }
});

function popUpBox(){
    if(confirm("KONFIRMASI PESANAN")){
        alert("PESANAN DITERIMA")
    }
    else{
        alert("PESANAN DIBATALKAN!")
    }
}


function inn(){
    dom.style.background = '#362222';
    dom.style.color = 'white';
}
function out(){
    dom.style.background = '#DFD3C3';
    dom.style.color = 'black';
}
document.getElementById('dom1').addEventListener('mouseover', inn);
document.getElementById('dom1').addEventListener('mouseout', out);

const newspaperSpinning = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  }
  
  const newspaper = document.querySelector(".newspaper");
  
  newspaper.addEventListener('click', () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
  });



