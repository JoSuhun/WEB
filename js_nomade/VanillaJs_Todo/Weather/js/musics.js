const music = [
    {
        title: "Trying My Best",
        lyrics: "I'm trying my best but every day it's so hard",
    },
    {
        title: "Rainbow",
        lyrics: "That there's always been a rainbow Hangin' over your head",
    },
    {
        title: "Scars To Your Beautiful",
        lyrics: "But there's a hope that's waiting for you in the dark",
    },
    {
        title: "feelings",
        lyrics: "Like, how could anybody love myself? And that's something that I still",
    },
    {
        title: "Somebody Else",
        lyrics: "I'm trying my best but every day it's so hard",
    },
    {
        title: "Best",
        lyrics: "Yeah, I want someone to tell me that I'm okay",
    },
    {
        title: "Trying",
        lyrics: "abcabvcsafefaefaef",
    },
    {
        title: "MY",
        lyrics: "Yeah, I want someone to tell me that I'm okay",
    },
    {
        title: "somebody",
        lyrics: "I just want somebody to tell me that I'm okay",
    },
    {
        title: "sound",
        lyrics: "An all familiar sound, I've been so used to running away",
    },

]

const lyrics = document.querySelector("#music p:first-child");
const title = document.querySelector("#music p:last-child");

const todaysMusic = music[Math.floor(Math.random()*music.length)];
lyrics.innerText = todaysMusic.lyrics;
title.innerText = todaysMusic.title;