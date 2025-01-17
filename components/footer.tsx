export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between px-10">
          {/* Follow Us Section */}
          <div>
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
                <a
                  href="mailto:your-email@example.com"
                  className="hover:text-gray-400"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-gray-400"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div >
            <p className="font-semibold mb-2">Quick Links:</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/faq"
                  className="hover:text-gray-400"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-gray-400"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/exchange-return-policy"
                  className="hover:text-gray-400"
                >
                  Exchange/Return Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="hover:text-gray-400"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="container mx-auto text-center mt-6">
          <p className="text-sm">© 2025 Vaselsa. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  