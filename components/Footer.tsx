export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 pt-16 pb-8 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Spitfire</h3>
          <p className="max-w-xs">
            Pure speed. Formula One urethane technology pushing the boundaries of what&apos;s possible on a skateboard.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Formula One</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Classics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Apparel</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider">Stay Fresh</h4>
          <p>Join our newsletter for exclusive drops and updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-black border border-white/20 p-3 rounded-l-md outline-none focus:border-white/50 w-full"
            />
            <button className="bg-white text-black px-4 font-bold rounded-r-md uppercase hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-end items-center">
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
