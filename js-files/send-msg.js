function sendMsg() {
    let rawMsg = document.getElementById("messageValue").value;
    let msg = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/972542349294?text=${msg}`,'_blank');
}