import React, { useEffect, useRef } from 'react';
import resume from '../Assets/Resume_3.pdf'
import Lottie from 'lottie-web';
import { TypeAnimation } from 'react-type-animation';


const Resume = () => {
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Assets/hi.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    return (
        <div id='resume' className='max-w-[1000px] mx-auto h-screen w-full flex items-center justify-center flex-col'>
            <p>Hi, My name is</p>
            {/* <h1 className=' text-7xl'>Abu Zobayer Bin Siddique</h1> */}
            <div>
                <TypeAnimation
                    sequence={[
                        'Abu Zobayer Bin Siddique'
                    ]}
                    wrapper="h1"
                    cursor={false}
                    speed={1}
                    repeat={0}
                    style={{ fontSize: '4em' }}
                />
            </div>
            <div className='grid grid-cols-2 mt-5'>
                <div className='flex justify-center items-center flex-col'>
                    <h3 className='text-5xl'>I'm a Full Stack Developer</h3>
                    <p className='text-wrap  text-lg'>As a full-stack developer, my goal is to produce exceptional digital experiences. Right now, my main focus is on building responsive full-stack online applications.</p>
                    <div className='my-5'>
                        <a href={resume} download className='outline outline-1 outline-violet-400 hover:bg-violet-200 hover:text-black rounded px-6 py-2'>Download Resume</a>
                    </div>
                </div>
                <div ref={container} className='w-full'>
                    {/* <img src={img} alt="" className='' /> */}
                </div>
            </div>
        </div>
    );
};

export default Resume;