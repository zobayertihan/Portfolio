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
                        <label htmlFor="biCycleKeeper" className="btn btn-ghost">Details</label>
                    </div>
                </div>
                <div className="max-w-xs p-2 rounded-md shadow-md bg-[#263159] text-gray-50">
                    <img src="https://i.ibb.co/B6HNtWG/animator.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center px-5">
                        <h2 className="text-2xl text-center font-semibold tracking-wide">Animator</h2>
                        <label htmlFor="animator" className="btn btn-ghost">Details</label>
                    </div>
                </div>
                <div className="max-w-xs p-2 rounded-md shadow-md bg-[#263159] text-gray-50">
                    <img src="https://i.ibb.co/n3pNvLy/learners.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2 flex justify-between items-center px-5">
                        <h2 className="text-2xl text-center font-semibold tracking-wide">Learner's</h2>
                        <label htmlFor="learners" className="btn btn-ghost">Details</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="biCycleKeeper" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img src="https://i.ibb.co/GQY8BV2/biCycle.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <h3 className="font-bold text-2xl text-center">BiCycle Keeper</h3>
                    <p className="py-4">A website where users can buy or sell used bicycles at fair prices. For users, sellers, and admins, we have routes with different dashboard options to manage the products or users. We used an authentication System. Also, we added a payment system for safer transection.</p>
                    <p className='py-4'><span className='text-lg font-semibold'>Technologies:</span> React, React-Router, Tailwind CSS, Node, Express, HTML, React Query, Axios, MongoDB, Firebase, JWT, Vercel</p>
                    <div className='flex justify-between items-center py-5'>
                        <a href="https://bicyclekeeper-8b86d.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a href="https://github.com/zobayertihan/BiCycle_Keeper-Client" target="_blank" rel="noopener noreferrer">Github Client Source</a>
                        <a href="https://github.com/zobayertihan/BiCycle_Keeper-Server" target="_blank" rel="noopener noreferrer">Github Server Source</a>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="biCycleKeeper" className="btn">Close</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="animator" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img src="https://i.ibb.co/B6HNtWG/animator.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <h3 className="font-bold text-2xl text-center">Animator</h3>
                    <p className="py-4">A website where anyone can find services that a person provides. The person can add or remove any services. Users can add or edit their reviews. Also, users can buy services for the proper amount. To buy a service users have to create an account.</p>
                    <p className='py-4'><span className='text-lg font-semibold'>Technologies:</span> React, React-Router, Tailwind CSS, Node, Express, HTML, Firebase, MongoDB, Vercel.</p>
                    <div className='flex justify-between items-center py-5'>
                        <a href="https://animator-3509c.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a href="https://github.com/zobayertihan/Animator_Client" target="_blank" rel="noopener noreferrer">Github Client Source</a>
                        <a href="https://github.com/zobayertihan/Animator_Server" target="_blank" rel="noopener noreferrer">Github Server Source</a>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="animator" className="btn">Close</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="learners" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img src="https://i.ibb.co/n3pNvLy/learners.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <h3 className="font-bold text-2xl text-center">Learner's</h3>
                    <p className="py-4">An educational website where users can learn about different programming languages or frameworks. Also, users can participate in quizzes on a specific topic. Users have to create an account to use all the services. Also, we provide some premium facilities.</p>
                    <p className='py-4'><span className='text-lg font-semibold'>Technologies:</span> React, React-Router, Tailwind CSS, Node, Express, HTML, CSS, Firebase, Vercel.</p>
                    <div className='flex justify-between items-center py-5'>
                        <a href="https://learner-s-66062.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                        <a href="https://github.com/zobayertihan/Learners_Client" target="_blank" rel="noopener noreferrer">Github Client Source</a>
                        <a href="https://github.com/zobayertihan/Learners_Server" target="_blank" rel="noopener noreferrer">Github Server Source</a>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="learners" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;