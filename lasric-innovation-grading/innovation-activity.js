const tabBtn = document.querySelectorAll('.tablinks');

tabBtn.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
    })
})



function openCity(evt, cityName) {

    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();


  const menu = document.querySelector('.toggle-menu');
  
  menu.addEventListener('click', function () {
  
  const info = document.querySelector('.added-info');
  info.classList.toggle('shift')

  const betty = document.querySelector('.betty')
  betty.classList.toggle('overlay')

  const grade =  document.querySelector('.grade-columns')
  grade.classList.toggle('high')

})