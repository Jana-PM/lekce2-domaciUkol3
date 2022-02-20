function prehrat(){
    let audioFile = document.getElementById('zvuk');
    audioFile.play();
}

function pauza(){
    let audioFile = document.getElementById('zvuk');
    audioFile.pause();
}

function vypnout(){
    let audioFile = document.getElementById('zvuk');
    audioFile.load();
}

function hlasitostStredni(){
    let audioFile = document.getElementById('zvuk');
    audioFile.volume = 0.2;
}

function hlasitostMaximalni(){
    let audioFile = document.getElementById('zvuk');
    audioFile.volume = 1;
}

function spustitZnovu(){
    let audioFile = document.getElementById('zvuk');
    audioFile.load();
    audioFile.play();
}
