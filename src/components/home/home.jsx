function Home() {
    return (
        <>
        <section className="text-center py-10">
            <h1 classNameName="text-4xl font-bold mb-4">Where Every Moment Becomes a Memory!</h1> 
            <h6>Dive into a world of diverse events, from thrilling concerts to enriching cultural gatherings. Create lasting memories and connections with us!</h6>
            <div className="mt-6">
                <input className="border p-2 rounded-l" placeholder="Search events" alt="Search Events" type="text" /> 
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none">Search</button> 
            </div>
        </section>

        <section className="py-10 bg-white">
            <div className="container mx-auto">
                <h3 className="text-3xl font-semibold mb-6">Latest Events</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md"/>
                        <h4 className="text-xl font-semibold mb-2">Event 1</h4>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Location:</span> Islamabad</h6>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Total Tickets:</span> 100</h6>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md"/>
                        <h4 className="text-xl font-semibold mb-2">Event 2</h4>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Location:</span> Islamabad</h6>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Total Tickets:</span> 100</h6>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md/"/>
                        <h4 className="text-xl font-semibold mb-2">Event 3</h4>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Location:</span> Islamabad</h6>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Total Tickets:</span> 100</h6>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md"/>
                        <h4 className="text-xl font-semibold mb-2">Event 4</h4>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Location:</span> Islamabad</h6>
                        <h6 className="text-gray-600 mb-2"><span className="font-bold">Total Tickets:</span> 100</h6>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
  }
  
  export default Home;