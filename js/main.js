var button_escolher = document.getElementById('button_escolher');
button_escolher.addEventListener('click', function addClass (){
  let button_escolher = document.getElementById('button_escolher');
  let aotm_principal = document.getElementById('aotm_principal');
  let volumes = document.getElementById('volumes');
  let container_geral = document.getElementById('container_geral')
  button_escolher.classList.add("outsidePage");
  aotm_principal.classList.add("outsidePage");
  volumes.classList.remove("volumes-outPage");
  volumes.classList.add("inPage");
  container_geral.classList.remove("overflow-hidden");
});

