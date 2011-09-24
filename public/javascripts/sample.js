var input  = document.getElementById('message');
var socket = io.connect();
socket.on('chat', function (data) {
    var p   = document.createElement('p');
    var txt = document.createTextNode(data);
    p.appendChild(txt);
    document.body.appendChild(p);
});
function onSubmit() {
    socket.emit('chat', input.value);
    input.value = '';
    return false;
}
