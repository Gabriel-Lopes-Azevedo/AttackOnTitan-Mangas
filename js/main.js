let button_escolher = document.getElementById('button_escolher');
button_escolher.addEventListener('click', function addClass (){
  let button_escolher = document.getElementById('button_escolher');
  let aotm_principal = document.getElementById('aotm_principal');
  let volumes = document.getElementById('volumes');
  let voltar = document.getElementById('Voltar');
  let titulo_volume = document.getElementById('titulo_volume');
  button_escolher.classList.add("outPage");
  aotm_principal.classList.add("outPage");
  volumes.classList.remove("outPage");
  volumes.classList.add("inPage");
  voltar.classList.remove("outPage");
  voltar.classList.add("inPage");
  titulo_volume.classList.remove("outPage");
  titulo_volume.classList.add("inPage");
});

let button_voltar = document.getElementById('Voltar');
button_voltar.addEventListener('click', function voltarMenu (){
  let volumes = document.getElementById('volumes');
  let voltar = document.getElementById('Voltar');
  let button_escolher = document.getElementById('button_escolher');
  let aotm_principal = document.getElementById('aotm_principal');
  let titulo_volume = document.getElementById('titulo_volume');
  volumes.classList.add("outPage");
  voltar.classList.add("outPage");
  button_escolher.classList.remove("outPage")
  aotm_principal.classList.remove("outPage");
  aotm_principal.classList.add("inPage");
  button_escolher.classList.add("inPage");
  titulo_volume.classList.remove("inPage")
  titulo_volume.classList.add("outPage");
});

