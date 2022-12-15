import React from 'react';

const About = () => {
    return (
        <div id='about' className='max-w-[1000px] mx-auto h-screen w-full flex items-center justify-center flex-col'>
            <div className='grid grid-cols-2'>
                <div>
                    <div>
                        <p className='text-5xl border-b-4 border-violet-400'>About</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-10 py-5'>
                <div>
                    <h1 className='text-5xl'>Hi, I'm Abu Zobayer Bin Siddique, nice to meet you. Please take a look around</h1>
                </div>
                <div>
                    <p className='text-lg'>I aim to succeed as a developer by utilizing my abilities to make a significant contribution and to scale up my knowledge and expertise. I'm a keen learner of programming and hope to advance my abilities in my quest to become a full stack developer. I think my abilities, together with my diligence and deep interest in technology, would be advantageous to your very prospective of interest.</p>
                </div>
            </div>
        </div>
    );
};

export default About;