import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mailyan Law</h3>
            <p className="text-gray-400 mb-4">
              Expert immigration and personal injury attorney services with personalized attention to your case.
            </p>
            <p className="text-gray-400">
              <strong>Attorney:</strong> Meline Mailyan
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <strong className="text-white">Address:</strong>
                <br />
                801 N Brand Blvd Suite 665
                <br />
                Glendale, CA 91203
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href="tel:1-747-200-5520" className="hover:text-blue-400">
                  1-747-200-5520
                </a>
              </p>
              <p>
                <strong className="text-white">Hours:</strong> Mon – Fri: 9 am – 5 pm
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:info@mailyanlaw.com" className="hover:text-blue-400">
                  info@mailyanlaw.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-blue-400">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8166276707685!2d-118.25583!3d34.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7a5620db6edae4f!2s801%20N%20Brand%20Blvd%20Suite%20665%2C%20Glendale%2C%20CA%2091203!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mailyan Law. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
