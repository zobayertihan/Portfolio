import React from 'react';

const Projects = () => {

    return (
        <div id='projects' className='max-w-[1000px] mx-auto h-screen w-full flex items-center justify-center flex-col'>
            <h1 className='text-5xl border-b-4 border-violet-400 mb-10'>Projcts</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className="max-w-xs p-2 rounded-md shadow-md bg-[#263159] text-gray-50">
                    <img src="https://i.ibb.co/GQY8BV2/biCycle.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center px-3">
                        <h2 className="text-2xl text-center font-semibold tracking-wide">BiCycle Keeper</h2>
                        <label htmlFor="my-modal" className="btn btn-ghost">Details</label>
                    </div>
                </div>
                <div className="max-w-xs p-2 rounded-md shadow-md bg-[#263159] text-gray-50">
                    <img src="https://i.ibb.co/B6HNtWG/animator.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center px-5">
                        <h2 className="text-2xl text-center font-semibold tracking-wide">Animator</h2>
                        <label htmlFor="my-modal" className="btn btn-ghost">Details</label>
                    </div>
                </div>
                <div className="max-w-xs p-2 rounded-md shadow-md bg-[#263159] text-gray-50">
                    <img src="https://i.ibb.co/n3pNvLy/learners.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center px-5">
                        <h2 className="text-2xl text-center font-semibold tracking-wide">Learner's</h2>
                        <label htmlFor="my-modal" className="btn btn-ghost">Details</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;