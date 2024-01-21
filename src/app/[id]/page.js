"use client"
// import { useEffect, useState } from 'react';

// import { io } from 'socket.io-client';
// import { Peer } from "https://esm.sh/peerjs@1.5.2?bundle-deps"
// import Input from '../ui/components/Input';
import RoomDetailClient from "../ui/components/RoomDetailClient"

// const socket = io('http://localhost:4000');
// const socket = io();


// const myPeer = new Peer(undefined, {
//     host: '/',
//     port: '9000',
//     path: '/myapp'
// });

// const myPeer = new Peer(undefined, {
//     host: '/', // This will automatically use the same host as the page
//     port: '443', // This is the default HTTPS port
//     path: '/myapp' // This is the path to your PeerJS server
// });


export default function RoomDetail() {

    // myPeer.on('open', id => {
    //     socket.emit('join-room', 123, id);
    // })


    // const peers = {};
    // const myVideo = document.createElement('video');
    // myVideo.muted = true;

    // useEffect(() => {
    // navigator && navigator.mediaDevices.getUserMedia({
    //     video: true,
    //     audio: true
    // }).then(stream => {
    //     addVideoStream(myVideo, stream);

    //     myPeer.on('call', call => {
    //         call.answer(stream);

    //         const userVideo = document.createElement('video');
    //         call.on('stream', userVideoStream => {
    //             addVideoStream(userVideo, userVideoStream);
    //         })
    //     })

    //     socket.on('user-connected', userId => {
    //         connectToNewUser(userId, stream);
    //     })
    // })
    // }, [])



    // socket.on('user-disconnected', userId => {
    //     console.log("disconection");
    //     if (peers[userId]) peers[userId].close();
    // })

    // socket.on('broadcast-newMessage', msg => {
    //     const messageContainer = document.getElementById('chat-box');
    //     const newMessage = document.createElement('p')
    //     newMessage.innerText = msg;

    //     messageContainer.append(newMessage);
    // })


    // function connectToNewUser(userId, stream) {
    //     const call = myPeer.call(userId, stream);
    //     const video = document.createElement('video');
    //     call.on('stream', userVideoStream => {
    //         addVideoStream(video, userVideoStream);
    //     });
    //     call.on('close', () => {
    //         video.remove();
    //     });

    //     peers[userId] = call;
    // }

    // function addVideoStream(video, stream) {
    //     video.srcObject = stream;
    //     video.addEventListener('loadedmetadata', () => {
    //         video.play();
    //     })
    //     const videoGrid = document.getElementById('grid-roomCameras');
    //     let numCols = Math.round(Math.sqrt(videoGrid.children.length / 2));
    //     // console.log(videoGrid.children)
    //     videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    //     video.className = "rounded-2xl"
    //     videoGrid.append(video);

    // }

    // function emitirMensaje(message) {
    //     if (!message) return

    //     socket.emit('emit-message', message, 123);
    // }
    // let message = null;

    return (
        <>
        <h1>Que</h1>
            {/* <RoomDetailClient /> */}
        </>
        // <main className='w-full h-full flex flex-row flex-wrap justify-center align-middle'>
        //     <section id='room-info' className='w-[50%] h-[80vh] py-24 px-24 flex flex-row'>
        //         <div className='h-full w-[35%] py-5 bg-neutral-900 rounded-s-xl border-e-2 border-neutral-300/20'>
        //             info
        //         </div>
        //         <div className='h-full w-full max-w-full p-5 bg-neutral-900 rounded-e-xl relative overflow-y-scroll'>
        //             <div id='chat-box' className=''>

        //             </div>
        //             <div className='absolute top-[90%] flex flex-row gap-4'>
        //                 <Input handleChange={(msg) => { message = msg }} />
        //                 <button onClick={() => { emitirMensaje(message) }}>Enviar</button>
        //             </div>
        //         </div>
        //     </section>
        //     <section id={'grid-roomCameras'} className='w-[50%] h-[80vh] max-w-[80vh]'>

        //     </section>
        //     <section id='panel-control' className='w-[600px] p-5 rounded-xl bg-neutral-900 flex flex-row gap-5 justify-center text-center'>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //         <div className='w-[50px] h-[50px] bg-neutral-950 rounded-full'></div>
        //     </section>
        // </main>
    )
}
