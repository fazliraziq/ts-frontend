function Ticket() {
    return (
        <section className="bg-white p-8 rounded-md shadow-md">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Ticket Listings</h1>
                <div className="flex space-x-6 overflow-x-auto">
                    <div className="flex-shrink-0 w-80 bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md" />
                        <h4 className="text-xl font-semibold mb-2">Event Title</h4>
                        <p className="text-gray-600 mb-2">Location: Event Location</p>
                        <p className="text-gray-600 mb-2">Tickets: 2</p>
                        <p className="text-gray-700 mb-2">$50.00</p>
                        <p className="text-gray-600 mb-2">Expires in 3 days</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none">Resell</button>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-80 bg-gray-100 p-6 rounded-md shadow-md">
                        <img src="https://placehold.co/100x100.png" alt="Event Image" className="mb-4 rounded-md" />
                        <h4 className="text-xl font-semibold mb-2">Another Event</h4>
                        <p className="text-gray-600 mb-2">Location: Another Location</p>
                        <p className="text-gray-600 mb-2">Tickets: 1</p>
                        <p className="text-gray-700 mb-2">$25.00</p>
                        <p className="text-gray-600 mb-2">Expires in 1 day</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">View</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none">Resell</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Ticket;