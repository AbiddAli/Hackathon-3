export default function Newsletter() {
    return (
      <section className="bg-white py-16 px-6 sm:px-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Or Subscribe To The Newsletter</h2>
            <div className="flex justify-center items-center mb-8">
              <input
                type="email"
                placeholder="Email Address..."
                className="py-3 px-6 w-full sm:w-1/2 border border-gray-300 rounded-md"
              />
              <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md ml-4 hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  