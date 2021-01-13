import React from 'react';
import Story from './Story';
import "./StoryReel.css";


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://www.kienyke.com/sites/default/files/styles/interna_contenido_s/public/2020-09/Foto%201.jpeg?itok=8ixjz_5l"
                profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDIwOTk4NjY3/bruce-lee-9542095-1-402.jpg"
                title="Yo Yo"
            />
            <Story
                image="https://i.pinimg.com/236x/38/c0/cb/38c0cb2d0bfe97e87e339130f4faf284.jpg"
                profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDIwOTk4NjY3/bruce-lee-9542095-1-402.jpg"
                title="Bruce Lee"
            />
            <Story
                image="https://images.amcnetworks.com/amctv.la/wp-content/uploads/2015/11/game-of-death.jpg"
                profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDIwOTk4NjY3/bruce-lee-9542095-1-402.jpg"
                title="Pierre Lee"
            />
            <Story
                image="https://koiosbeveragecorp.com/wp-content/uploads/2019/08/Bruce-Lee-700x560.jpg"
                profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDIwOTk4NjY3/bruce-lee-9542095-1-402.jpg"
                title="Bruce Dinelle"
            />
            <Story
                image="https://i.pinimg.com/736x/8a/e8/f3/8ae8f37051ada3ad91385ab4c97d25be.jpg"
                profileSrc="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDIwOTk4NjY3/bruce-lee-9542095-1-402.jpg"
                title="Another Bruce"
            />
            </div>
    )
}

export default StoryReel
