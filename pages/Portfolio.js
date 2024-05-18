

import React from 'react';

const Portfolio = () => {
    return <section id="portfolio">
        <div className="container">
            <div className="flex items-center justify-between flex-wrap">
                <div className='mb-7 sm:mb-0'>
                    <h3 className="text-gray-950 text-[2rem] font-[700]">
                        My Recent Projects
                    </h3>
                </div>
                <div className="flex gap-3">
                    <button className=" text-smallTextColor border border-solid border-smalltextColor py-2 px-4 rounded-[8px]">All</button>

                </div>

            </div>
        </div>
    </section>
}

export default Portfolio