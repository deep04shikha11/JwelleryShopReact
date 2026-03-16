function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Shree Jewellers</h2>
          <p className="mt-2 text-gray-400">
            Elegant gold and diamond jewelry crafted with perfection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Katni, Madhya Pradesh</p>
          <p className="text-gray-400">+91 9876543210</p>
          <p className="text-gray-400">info@shreejewellers.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 border-t border-gray-700 py-4">
        © 2026 Shree Jewellers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
