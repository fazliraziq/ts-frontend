function Event() {
    return (
        <>
        <section className="bg-white p-8 rounded-md shadow-md">
            <div className="container mx-auto text-center">
                <img src="https://placehold.co/600x300.png" alt="Event Image" className="mx-auto mb-6 rounded-md" />

                <h1 className="text-3xl font-semibold mb-2">Event Title</h1>
                <h6 className="text-gray-600 mb-4"><span className="font-bold">Location:</span> Event Location</h6>
                <h6 className="text-gray-600 mb-4"><span className="font-bold">Event Created By:</span> Organizer Name</h6>
                <h6 className="text-gray-600 mb-4"><span className="font-bold">Tickets Available:</span> 100</h6>
                <h6 className="text-gray-600 mb-4"><span className="font-bold">Tickets Sold:</span> 50</h6>
                
                <div className="mb-6">
                    <img src="https://placehold.co/150x150.png" alt="QR Code" className="mx-auto" />
                    <p className="mt-2 text-gray-500 text-sm">Scan the QR code to find out the exact location</p>
                </div>

                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300">Buy Tickets</button>
            </div>
        </section>
        </>
    );
  }
  
  export default Event;