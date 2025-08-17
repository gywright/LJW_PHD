"use client"

import { useState, useEffect } from "react"

export default function TherapyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-teal-700">Dr. Naomi Edelson</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Compassionate Therapy for
                <span className="text-teal-600 block">Mind & Soul</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creating a safe space for healing, growth, and transformation through personalized therapeutic
                approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/therapist-portrait.png"
                    alt="Dr. Naomi Edelson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Dr. Naomi Edelson</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience in clinical psychology, I am dedicated to helping individuals navigate
              life's challenges with compassion and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <img src="/therapist-office.png" alt="Therapy office" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">My Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in creating a warm, non-judgmental environment where clients feel safe to explore their
                  thoughts and emotions. My integrative approach combines evidence-based therapies tailored to each
                  individual's unique needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Specializations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Anxiety & Depression
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Relationship Counseling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Trauma & PTSD
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Life Transitions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Therapeutic Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health services designed to support your journey toward wellness and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                One-on-one sessions focused on your personal goals, challenges, and growth in a confidential setting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Couples Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your relationship through improved communication, conflict resolution, and deeper connection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Heal family dynamics and improve relationships through understanding and effective communication
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to begin your journey? I'm here to support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">📞</span>
                    <span className="text-gray-600">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">✉️</span>
                    <span className="text-gray-600">dr.edelson@therapy.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">📍</span>
                    <span className="text-gray-600">
                      123 Wellness Ave, Suite 200
                      <br />
                      City, State 12345
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dr. Naomi Edelson</h3>
            <p className="text-gray-400 mb-6">Licensed Clinical Psychologist</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Insurance
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Dr. Naomi Edelson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
