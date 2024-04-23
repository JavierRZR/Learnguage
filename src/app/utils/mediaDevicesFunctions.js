

function stopMicrophone(stream) {

    if (stream) {
        stream.getTracks().forEach(track => {
            if (track.kind == "audio") {
                track.enabled = !track.enabled
            }
        });
    }
}


function stopCamera(stream) {

    if (stream) {
        stream.getTracks().forEach(track => {
            if (track.kind == "video") {
                track.enabled = !track.enabled
            }
        });
    }
}


function restartCamera(addVideoStream, connectToNewUser) {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        addVideoStream(myVideo, stream);
        mediaStream = stream;

        myPeer.on('call', call => {
            call.answer(stream);

            const userVideo = document.createElement('video');
            call.on('stream', userVideoStream => {
                addVideoStream(userVideo, userVideoStream);
            })
        })

        socket.on('user-connected', userId => {
            connectToNewUser(userId, stream);
        })


    })
}

export { stopMicrophone, stopCamera, restartCamera };