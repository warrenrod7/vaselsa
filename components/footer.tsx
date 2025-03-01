export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 w-full ">
      <div className="px-6 max-w-5xl mx-auto">
        {/* Flexbox for consistent 2-column layout */}
        <div className="flex flex-row md:flex-row justify-between gap-6">
          
          {/* Follow Us Section */}
          <div className="w-full md:w-1/2">
            <p className="font-semibold mb-2">Follow us on:</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/vaselsaclo/?igsh=MTVkMGNkbmFwM3VhbA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Email Us
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Call Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/2">
            <p className="font-semibold mb-2">Quick Links:</p>
            <ul className="space-y-2">
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Exchange/Return Policy
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/temp" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-6">
          <p className="text-sm">© 2025 Vaselsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
