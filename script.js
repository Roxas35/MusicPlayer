let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//Création de la musique

let track = document.createElement("audio");

//Liste de musique

let All_song = [

{
    name: "Title Screen",
    path: "music/Sonic 1/sonic-1-music-start-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},

{
    name: "Green Hill Zone",
    path: "music/Sonic 1/sonic-1-music-green-hill-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},

{
    name: "Marble Zone",
    path: "music/Sonic 1/sonic-1-music-marble-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Spring Yard Zone",
    path: "music/Sonic 1/sonic-1-music-spring-yard-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Labyrinth Zone",
    path: "music/Sonic 1/sonic-1-music-labyrinth-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Star Light Zone",
    path: "music/Sonic 1/sonic-1-music-star-light-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Scrap Brain Zone",
    path: "music/Sonic 1/sonic-1-music-scrap-brain-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Final Zone",
    path: "music/Sonic 1/sonic-1-music-final-zone-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Ending",
    path: "music/Sonic 1/sonic-1-music-ending-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Drowning",
    path: "music/Sonic 1/sonic-1-music-drowning-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Special Stage",
    path: "music/Sonic 1/sonic-1-music-special-stage-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Invincible",
    path: "music/Sonic 1/sonic-1-music-invincible-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},
{
    name: "Boss Theme",
    path: "music/Sonic 1/sonic-1-music-bosses-europe-version.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937329925730488370/Sonic_The_hedgehog_eu.png",
    singer: "Jun Senoue"
},

{
    name: "Title Theme",
    path: "music/Sonic 2/title-theme-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Emerald Hill Zone",
    path: "music/Sonic 2/emerald-hill-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Chemical Plant Zone",
    path: "music/Sonic 2/chemical-plant-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Aquatic Ruin Zone",
    path: "music/Sonic 2/aquatic-ruin-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Casino Night Zone",
    path: "music/Sonic 2/casino-night-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Hill Top Zone",
    path: "music/Sonic 2/hill-top-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Mystic Cave Zone",
    path: "music/Sonic 2/mystic-cave-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Oil Ocean Zone",
    path: "music/Sonic 2/oil-ocean-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Metropolis Zone",
    path: "music/Sonic 2/metropolis-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Sky Chase Zone",
    path: "music/Sonic 2/sky-chase-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Wing Fortress Zone",
    path: "music/Sonic 2/wing-fortress-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Death Egg Zone",
    path: "music/Sonic 2/death-egg-zone-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Boss Theme",
    path: "music/Sonic 2/boss-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Death Egg Robot",
    path: "music/Sonic 2/death-egg-robot-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Special Stage",
    path: "music/Sonic 2/special-stage-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Super Sonic",
    path: "music/Sonic 2/super-sonic-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Invincibility",
    path: "music/Sonic 2/invincibility-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Options Theme",
    path: "music/Sonic 2/options-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Emerald Hill Zone (2P)",
    path: "music/Sonic 2/emerald-hill-zone-2p-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Mystic Cave Zone (2P)",
    path: "music/Sonic 2/mystic-cave-zone-2p-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Casino Night Zone (2P)",
    path: "music/Sonic 2/casino-night-zone-2p-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Results",
    path: "music/Sonic 2/results-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Crédits",
    path: "music/Sonic 2/credits-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Hidden Palace Zone",
    path: "music/Sonic 2/hidden-palace-zone-unused-sonic-the-hedgehog-2-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937330900121829396/Sonic_the_Hedgehog_2.jpg",
    singer: "Jun Senoue"
},
{
    name: "Title Screen",
    path: "music/Sonic 3/title-screen-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Angel Island Zone Act 1",
    path: "music/Sonic 3/angel-island-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Angel Island Zone Act 2",
    path: "music/Sonic 3/angel-island-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Hydrocity Zone Act 1",
    path: "music/Sonic 3/hydrocity-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Hydrocity Zone Act 2",
    path: "music/Sonic 3/hydrocity-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Marble Garden Zone Act 1",
    path: "music/Sonic 3/marble-garden-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Marble Garden Zone Act 2",
    path: "music/Sonic 3/marble-garden-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Carnival Night Zone Act 1",
    path: "music/Sonic 3/carnival-night-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Carnival Night Zone Act 2",
    path: "music/Sonic 3/carnival-night-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Ice Cap Zone Act 1",
    path: "music/Sonic 3/ice-cap-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Ice Cap Zone Act 2",
    path: "music/Sonic 3/ice-cap-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Launch Base Zone Act 1",
    path: "music/Sonic 3/launch-base-zone-act-1-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Launch Base Zone Act 2",
    path: "music/Sonic 3/launch-base-zone-act-2-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Boss Act 1",
    path: "music/Sonic 3/act-1-boss-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Boss Act 2",
    path: "music/Sonic 3/act-2-boss-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Bonus Stage : Gumball",
    path: "music/Sonic 3/bonus-stage-gumball-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Special Stage",
    path: "music/Sonic 3/special-stage-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Special Stage (true speed)",
    path: "music/Sonic 3/sonic-3-music-special-stage-true-speed-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Theme of Knuckles",
    path: "music/Sonic 3/theme-of-knuckles-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Invincible",
    path: "music/Sonic 3/invincible-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Drowning",
    path: "music/Sonic 3/drowning-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Competition",
    path: "music/Sonic 3/competition-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Azure Lake",
    path: "music/Sonic 3/azure-lake-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Balloon Park",
    path: "music/Sonic 3/balloon-park-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Chrome Gadget",
    path: "music/Sonic 3/chrome-gadget-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Desert Palace",
    path: "music/Sonic 3/desert-palace-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Endless Mine",
    path: "music/Sonic 3/endless-mine-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Competition Results",
    path: "music/Sonic 3/competition-results-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Final Boss",
    path: "music/Sonic 3/final-boss-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Ending",
    path: "music/Sonic 3/ending-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Crédits",
    path: "music/Sonic 3/credits-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098388816662569/Sonic_3.jpg",
    singer: "Jun Senoue"
},
{
    name: "Title Theme",
    path: "music/Sonic & Knuckles/title-screen-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Mushroom Hill Zone Act 1",
    path: "music/Sonic & Knuckles/mushroom-hill-zone-act-1-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Mushroom Hill Zone Act 2",
    path: "music/Sonic & Knuckles/mushroom-hill-zone-act-2-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Flying Battery Zone Act 1",
    path: "music/Sonic & Knuckles/flying-battery-zone-act-1-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Flying Battery Zone Act 2",
    path: "music/Sonic & Knuckles/flying-battery-zone-act-2-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Sandopolis Zone Act 1",
    path: "music/Sonic & Knuckles/sandopolis-zone-act-1-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Sandopolis Zone Act 2",
    path: "music/Sonic & Knuckles/sandopolis-zone-act-2-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Lava Reef Zone Act 1",
    path: "music/Sonic & Knuckles/lava-reef-zone-act-1-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Lava Reef Zone Act 2",
    path: "music/Sonic & Knuckles/lava-reef-zone-act-2-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Sky Sanctuary Zone",
    path: "music/Sonic & Knuckles/sky-sanctuary-zone-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Death Egg Act 1",
    path: "music/Sonic & Knuckles/death-egg-zone-act-1-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Death Egg Act 2",
    path: "music/Sonic & Knuckles/death-egg-zone-act-2-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Doomsday Zone",
    path: "music/Sonic & Knuckles/doomsday-zone-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Boss Act 1",
    path: "music/Sonic & Knuckles/act-1-boss-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Bonus Stage Glowball",
    path: "music/Sonic & Knuckles/bonus-stage-glowball-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Bonus Stage Slot Machine",
    path: "music/Sonic & Knuckles/bonus-stage-slot-machine-sonic-the-hedgehog-3-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Theme of Knuckles",
    path: "music/Sonic & Knuckles/theme-of-knuckles-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Invincible",
    path: "music/Sonic & Knuckles/invincible-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Ending",
    path: "music/Sonic & Knuckles/ending-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},
{
    name: "Crédits",
    path: "music/Sonic & Knuckles/credits-sonic-knuckles-ost.mp3",
    img: "https://cdn.discordapp.com/attachments/470893557734047744/937098579611385966/Sonic_Knuckles.jpg",
    singer: "Jun Senoue"
},



];

// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong(); 
            }
        }
    }
