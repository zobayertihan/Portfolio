import React from 'react';
import bootstrap from '../Assets/Bootstrap.png'
import css from '../Assets/css.png'
import firebase from '../Assets/firebase.png'
import github from '../Assets/github.png'
import html from '../Assets/html.png'
import js from '../Assets/javascript.png'
import mongo from '../Assets/mongo.png'
import node from '../Assets/node.png'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'

const Skills = () => {
    const images = [
        {
            id: 1,
            img: css,
            name: 'CSS',
            progress: '90%'
        },
        {
            id: 2,
            img: html,
            name: 'HTML',
            progress: '95%'
        },
        {
            id: 3,
            img: bootstrap,
            name: 'Bootstrap',
            progress: '90%'
        },
        {
            id: 4,
            img: tailwind,
            name: 'Tailwind',
            progress: '90%'
        },
        {
            id: 5,
            img: js,
            name: 'Javascript',
            progress: '85%'
        },
        {
            id: 6,
            img: react,
            name: 'React',
            progress: '75%'
        },
        {
            id: 7,
            img: node,
            name: 'Node JS',
            progress: '50%'
        },
        {
            id: 8,
            img: firebase,
            name: 'Firebase',
            progress: '50%'
        },
        {
            id: 9,
            img: mongo,
            name: 'Mongo DB',
            progress: '50%'
        },
        {
            id: 10,
            img: github,
            name: 'GitHub',
            progress: '75%'
        },
    ]
    return (
        <div id='skills' className='max-w-[1000px] mx-auto h-screen w-full flex items-center justify-center flex-col'>
            <h1 className='text-5xl border-b-4 border-violet-400'>Skills</h1>
            <div className='grid grid-cols-5 gap-3 mt-5'>
                {
                    images.map((image) =>
                        <div key={image.id} className="max-w-xs p-6 rounded-md shadow-2xl bg-[#071336]">
                            <div className='flex items-center justify-center'>
                                <img src={image.img} alt="" className="object-cover object-center w-1/3 rounded-md h-1/3 bg-transparent" />
                            </div>
                            <div className="mt-6 mb-2">
                                <h2 className="text-2xl font-semibold tracking-wide text-center">{image.name}</h2>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: image.progress }}></div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Skills;