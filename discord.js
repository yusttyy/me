function refreshLanyardImage() {
    const img = document.getElementById('lanyard-img');
    const baseUrl = "https://lanyard.cnrad.dev/api/928978204801269771";
    const timestamp = new Date().getTime();
    img.src = baseUrl + "?t=" + timestamp;
}
setInterval(refreshLanyardImage, 10000);