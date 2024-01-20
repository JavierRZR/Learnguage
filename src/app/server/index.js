// index.js
const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const { v4: uuidV4 } = require('uuid');

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors());


app.get('/:room', (req, res) => {
    res.redirect(`http://localhost:3000/${uuidV4()}`);
})


io.on('connection', (socket) => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', userId);
    })

    socket.on('disconnect', (socket) => {
        console.log("disconnect")
        // socket.to(roomId).emit('user-disconnected', userId)
    })

    socket.on('emit-message', (msg, roomId) => {
        socket.join(roomId);
        io.to(roomId).emit('broadcast-newMessage', msg);
    })
})


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
