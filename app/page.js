// app/page.js
export default function Home() {
  return (
    <div>
    <div className="w-full h-screen relative bg-[#c48f7d] rounded-md overflow-hidden flex flex-col">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-12 pt-6">
        <div className="flex space-x-12">
          <div className="text-white text-sm font-light hover:underline cursor-pointer">Home</div>
          <div className="text-white text-sm font-light hover:underline cursor-pointer">Menu</div>
          <div className="text-white text-sm font-light hover:underline cursor-pointer">Login</div>
        </div>

        <button className="w-[100px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <span className="text-[#c48f7d] text-xs font-medium">Click</span>
        </button>
      </header>


      <main className="flex-1 flex flex-col items-start justify-center px-16">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <div className="flex flex-col max-w-md">
            <h1 className="text-white text-6xl font-['Playfair_Display'] font-bold mb-8">
              BlaBlaCoffee!
            </h1>
            
            <div className="text-white text-lg font-light mt-auto font-['Montserrat'] italic">
              Your NO.1 Choice
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0 mx-auto">
            <div 
              className="w-[450px] h-[650px] bg-[#e8d4be] rounded-md flex rotate-12 items-center justify-center overflow-hidden"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
            </div>
          </div>
        </div>
      </main>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-4 flex items-center justify-center bg-white">
        <div className="w-full max-w-5xl flex justify-between px-8 text-[#c48f7d] text-xs">
          <div className="hover:underline cursor-pointer">Contact Information</div>
          <div className="hover:underline cursor-pointer">Company Policy</div>
          <div className="hover:underline cursor-pointer">Be our partner today</div>
        </div>
      </footer>
      </div>
  );
}