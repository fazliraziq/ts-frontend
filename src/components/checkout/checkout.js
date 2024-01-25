function Checkout() {
    return (
       <>
       <section className="bg-white p-8 rounded-md shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img src="https://placehold.co/50x50.png" alt="Event Image" className="mr-4 rounded-md" />
                        <div>
                            <h4 className="text-xl font-semibold">Event Title</h4>
                            <p className="text-gray-600">Location: Event Location</p>
                            <p className="text-gray-600">Tickets: 2</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700">$50.00</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img src="https://placehold.co/50x50.png" alt="Event Image" className="mr-4 rounded-md" />
                        <div>
                            <h4 className="text-xl font-semibold">Another Event</h4>
                            <p className="text-gray-600">Location: Another Location</p>
                            <p className="text-gray-600">Tickets: 1</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700">$25.00</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <h4 className="text-lg font-semibold">Total:</h4>
                    <p className="text-xl font-bold text-blue-500">$75.00</p>
                </div>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300 mt-4">Checkout</button>
            </div>
        </section>
       </>
    );
  }
  
  export default Checkout;