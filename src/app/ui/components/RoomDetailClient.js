"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { io } from 'socket.io-client';
import { Peer } from "https://esm.sh/peerjs@1.4.7?bundle-deps"
import Input from './Input';

const socket = io(`https://learnguage-server-dev-estf.1.ie-1.fl0.io`);
// const socket = io(`http://localhost:4000/`);

const myPeer = new Peer({
    config: {
        iceServers: [
            {
                urls: "stun:stun.relay.metered.ca:80",
            },
            {
                urls: "turn:standard.relay.metered.ca:80",
                username: "c3190f0d456daa1bea81035e",
                credential: "1CiNoMK0EYZGqJfT",
            },
            {
                urls: "turn:standard.relay.metered.ca:80?transport=tcp",
                username: "c3190f0d456daa1bea81035e",
                credential: "1CiNoMK0EYZGqJfT",
            },
            {
                urls: "turn:standard.relay.metered.ca:443",
                username: "c3190f0d456daa1bea81035e",
                credential: "1CiNoMK0EYZGqJfT",
            },
            {
                urls: "turns:standard.relay.metered.ca:443?transport=tcp",
                username: "c3190f0d456daa1bea81035e",
                credential: "1CiNoMK0EYZGqJfT",
            },
        ],
    }
});

export default function RoomDetailClient() {

    const roomId = usePathname().slice(1);
    let userId = null;

    myPeer.on('open', id => {
        userId = id;
        socket.emit('join-room', roomId, id);
    })

    const peers = {};
    const myVideo = document.createElement('video');
    myVideo.muted = true;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            addVideoStream(myVideo, stream);

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

            //Carga evento de salida, para notificar a la sala de nuestro borrado.
            const handleBeforeUnload = (event) => {
                // Perform actions before the component unloads
                event.preventDefault();
                disconnectMe();
                event.returnValue = '';
            };
            window.addEventListener('beforeunload', handleBeforeUnload);
            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        })

    }, [])



    socket.on('user-disconnected', userId => {
        if (peers[userId]) peers[userId].close();
    })

    socket.on('broadcast-newMessage', msg => {
        const messageContainer = document.getElementById('chat-box');
        const newMessage = document.createElement('p')
        newMessage.innerText = msg;

        messageContainer.append(newMessage);
    })


    function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        });
        call.on('close', () => {
            video.remove();
        });

        peers[userId] = call;
    }

    function addVideoStream(video, stream) {
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', () => {
            video.play();
        })
        const videoGrid = document.getElementById('grid-roomCameras');
        let numCols = Math.round(Math.sqrt(videoGrid.children.length / 2));
        videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
        video.className = "rounded-2xl"
        videoGrid.append(video);

    }

    function emitirMensaje(message) {
        if (!message) return

        socket.emit('emit-message', message, roomId);
    }

    function disconnectMe() {
        socket.emit('disconnectMe', { userId, roomId });
        socket.disconnect();
    }

    let message = null;
    return (
        <main className='w-full h-full flex flex-row flex-wrap justify-center align-middle'>
            <section id='room-info' className='w-[50%] h-[80vh] py-24 px-24 flex flex-row'>
                <div className='h-full w-[35%] py-5 bg-neutral-900 rounded-s-xl border-e-2 border-neutral-300/20'>
                    info
                </div>
                <div className='h-full w-full max-w-full p-5 bg-neutral-900 rounded-e-xl relative overflow-y-scroll'>
                    <div id='chat-box' className=''>

                    </div>
                    <div className='absolute top-[90%] flex flex-row gap-4'>
                        <Input handleChange={(msg) => { message = msg }} />
                        <button onClick={() => { emitirMensaje(message) }}>Enviar</button>
                    </div>
                </div>
            </section>
            <section id={'grid-roomCameras'} className='w-[50%] h-[80vh] max-w-[80vh]'>

            </section>
            <section id='panel-control' className='w-[600px] p-5 rounded-xl bg-neutral-900 flex flex-row gap-5 justify-center text-center'>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
                <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'
                    onClick={() => { disconnectMe() }}>X</div>
            </section>
        </main>
    )
}
