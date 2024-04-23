const IconMic = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-microphone`} width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
    </svg>
);

const IconMutedMic = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-microphone-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 3l18 18" />
        <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" />
        <path d="M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85" />
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
    </svg>
);

const IconCamera = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera " width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
)

const IconMutedCamera = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-camera-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.297 4.289a.997 .997 0 0 1 .703 -.289h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249 .11 -.524 .172 -.813 .172h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1c.298 0 .58 -.065 .834 -.181" />
        <path d="M10.422 10.448a3 3 0 1 0 4.15 4.098" />
        <path d="M3 3l18 18" />
    </svg>
)

const IconLogout = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M9 12h12l-3 -3" />
        <path d="M18 15l3 -3" />
    </svg>
);

const IconExit = ({ color = "#ffffff", strokeWidth = "1.5", size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323" />
        <path d="M21.5 21.5l-5 -5" />
        <path d="M16.5 21.5l5 -5" />
    </svg>
);



export { IconMic, IconMutedMic, IconExit, IconLogout, IconCamera, IconMutedCamera }