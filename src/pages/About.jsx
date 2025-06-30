//About.jsx
export default function About (){

    return (
        <div className="flex flex-col space-y-6 caret-transparent m-1 mb-2 p-1
                        md:space-y-8 md:m-2 md:mb-3 md:p-2
                        lg:space-y-9 lg:m-3 lg:mb-4 lg:p-3
                        ">
            <section className=" rounded-lg shadow-md p-3 md:p-4 lg:p-5">
                <h2 className="bg-gray-600 text-white m-1 mb-2 p-1  font-semibold  text-center
                                md:m-2 md:mb-3 md:p-2 md:text-xl
                                lg:m-3 lg:mb-4 lg:p-3 lg:text-2xl
                                ">What Does This App Do</h2>
                <p className="text-justify m-1 p-1  
                               md:m-2 md:p-2 md:text-lg
                               lg:m-3 lg:p-3 lg:text-xl lg:leading-relaxed">Budget Buddy is a personal finance manager where you can add, edit, delete and filter transactions — with live summary, local storage support and mobile-friendly UI. It’s evolving to include data visualization, printable summaries and sample data injection for demos.</p>
            </section>
            <section className=" rounded-lg shadow-md p-3 md:p-4 lg:p-5">
                <h2 className="bg-gray-600 text-white m-1 font-semibold text-center
                                mb-2 p-1 md:m-2 md:mb-3 md:p-2 md:text-xl
                                lg:m-3 lg:mb-4 lg:p-3 lg:text-2xl
                                ">About the Developer</h2>
                <p className="text-justify m-1 p-1 
                               md:m-2 md:p-2 md:text-lg
                               lg:m-3 lg:p-3 lg:text-xl lg:leading-relaxed">I'm a frontend developer who builds clean, responsive, and functional web apps. I work with <span className="font-semibold">React, JavaScript and Tailwind CSS.</span> I love building responsive, usable tools that solve real problems.</p>
                <p className="text-justify m-1 p-1 
                               md:m-2 md:p-2 md:text-lg
                               lg:m-3 lg:p-3 lg:text-xl lg:leading-relaxed">This project is a part of my portfolio — built with a clear focus on functionality, maintainability and real-world readiness.</p>
            </section>
            <section className=" rounded-lg shadow-md p-3 md:p-4 lg:p-5">
                <h2 className="bg-gray-600 text-white m-1 mb-2 p-1 font-semibold text-center
                                md:m-2 md:mb-3 md:p-2 md:text-xl
                                lg:m-3 lg:mb-4 lg:p-3 lg:text-2xl
                                ">Useful Links</h2>
                <ul className="p-1 m-1 font-medium 
                                md:p-2 md:m-2 md:text-lg
                                lg:p-3 lg:m-3 lg:text-xl lg:leading-relaxed">
                    <li>🔗 Github Repo: <a href="https://github.com/pardhu-og/budget-buddy" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline">View</a></li>
                    <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/pardhasaradhi-alaparthi-203786371" target="_blank" rel="noopener noreferrer" className="font-semibold  text-blue-600 underline">View</a></li>
                    <li>🔗 Blog: <a href="https://dialogue-with-machine-a-coders-journey.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline">View</a></li>
                    <li>🔗 Portfolio Site: <a href="https://portfolio-site-pardhasaradhi-alaparthis-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 underline">View</a></li>
                </ul>
            </section>
        </div>
    )
}