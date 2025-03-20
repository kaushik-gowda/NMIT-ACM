import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-8">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Send className="h-12 w-12 text-black mx-auto mb-4" />
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-500">Get in touch with our team</p>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;