"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function TherapyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert(
          "Thank you for your message! Dr. Wright will get back to you within 24 hours to schedule your free consultation.",
        )
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("Sorry, there was an error sending your message. Please try calling (925) 297-5475 directly.")
    } finally {
      setIsSubmitting(false)
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
            <div className="text-2xl font-bold text-teal-700">Dr. Lisa Wright</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Welcome
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-teal-600 transition-colors"
              >
                Contact Me
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
                  Welcome
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Resources
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600"
                >
                  Contact Me
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
                Evidence-based treatment for
                <span className="text-teal-600 block">insomnia, anxiety, and chronic pain</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome and thank you for visiting! Dr. Lisa Wright is a licensed clinical psychologist (PSY22786) that
                offers individual and group therapy, pre-surgical evaluations, consultation, and workshops/talks
                throughout California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors font-medium"
                >
                  Free 20-min Consultation
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
                    src="/dr-wright-headshot.jpg"
                    alt="Dr. Lisa Wright"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: "50% 30%" }}
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

          <div className="mt-16 text-center lg:text-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Location</h3>
              <div className="space-y-2 text-gray-600">
                <p>35-C Avenida de Orinda</p>
                <p>Orinda, CA 94563</p>
                <p className="text-sm">(About 1 mile from the Orinda BART station)</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <p>
                    <strong>Phone:</strong> (925) 297-5475
                  </p>
                  <p>
                    <strong>Email:</strong> lisawrightphd@gmail.com
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg h-[512px]">
                <img
                  src="/office-couch.jpg"
                  alt="Comfortable therapy office with modern seating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full rounded-xl overflow-hidden shadow-lg h-64">
                  <img
                    src="/office-plant.jpg"
                    alt="Peaceful therapy office corner with plant and certificates"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full rounded-xl overflow-hidden shadow-lg h-64">
                  <img src="/office-patio.jpg" alt="Serene garden patio area" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Wright is a licensed clinical psychologist in California that specializes in health and wellness
                  who has worked in diverse medical settings for over 15 years. She has a Ph.D. and Master's degree in
                  Clinical Psychology with an emphasis in Health Psychology from Arizona State University.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Wright trained at the APA-accredited VA Medical Center in San Diego and University of California,
                  San Diego Healthcare System. She is committed to continual learning and staying abreast of advances in
                  psychology and behavioral medicine.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Wright has a warm and compassionate approach, where she meets people where they are and helps them
                  move toward where they want to be. She blends evidence-based approaches with humor and realism.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Advanced Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Cognitive-behavioral therapy (CBT)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Acceptance and commitment therapy (ACT)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Pain Reprocessing Therapy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                    Stanford "Empowered Relief" program
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Life Challenges I Help With</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <ul className="space-y-1">
                    <li>• Anxiety, worry, and stress</li>
                    <li>• Insomnia</li>
                    <li>• Chronic pain management</li>
                    <li>• Depression</li>
                    <li>• Life transitions</li>
                    <li>• Work-related stress</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Chronic illness adjustment</li>
                    <li>• Self-esteem issues</li>
                    <li>• Caregiver stress</li>
                    <li>• Trauma</li>
                    <li>• Relationship issues</li>
                    <li>• Women's Health</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Professional Organizations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                •{" "}
                <a href="https://www.behavioralsleep.org/" className="text-teal-600 hover:underline">
                  Society of Behavioral Sleep Medicine
                </a>
              </div>
              <div>• Association for Behavioral and Cognitive Therapies (ABCT)</div>
              <div>• The Association for Contextual Behavioral Science (ACBS)</div>
              <div>• Northern California CBT Network</div>
              <div>• American Psychological Association (APA), Division 38</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based treatments tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🛏️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CBT-Insomnia</h3>
              <p className="text-gray-600 leading-relaxed">
                Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment. Clients often see
                significant progress within 4-8 sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chronic Pain Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Using CBT, ACT, and Pain Reprocessing Therapy to help retrain the brain and break the cycle of chronic
                pain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nightmare Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Imagery Rehearsal Therapy (IRT) to decrease intensity and frequency of nightmares and modify distressing
                content.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ACT Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Acceptance and Commitment Therapy using mindfulness to help you move toward your most important life
                values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Surgical Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Psychological assessments for bariatric surgery, organ transplantation, and chronic pain procedures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workshops & Talks</h3>
              <p className="text-gray-600 leading-relaxed">
                Speaking engagements on sleep improvement, stress management, chronic illness self-management, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-xl text-gray-600">Helpful links and recommended reading</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sleep Resources</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">Websites:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      •{" "}
                      <a href="https://www.behavioralsleep.org/" className="hover:text-teal-600">
                        Society of Behavioral Sleep Medicine
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a href="https://aasm.org/" className="hover:text-teal-600">
                        American Academy of Sleep Medicine
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">Articles:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                      •{" "}
                      <a
                        href="https://www.acponline.org/acp-newsroom/acp-recommends-cognitive-behavioral-therapy-as-initial-treatment-for-chronic-insomnia"
                        className="hover:text-teal-600"
                      >
                        CBT-I as First-Line Treatment
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a href="http://www.apa.org/monitor/2017/10/cover-sleep.aspx" className="hover:text-teal-600">
                        Sleep: The Third Pillar of Health
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Books</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-teal-600">Sleep:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• "Say Goodnight to Insomnia" by Gregg Jacobs, Ph.D.</li>
                    <li>• "Overcoming Insomnia" by Jack Edinger & Colleen Carney</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-600">Pain Management:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• "The Pain Survival Guide" by Dennis Turk & Frits Winter</li>
                    <li>• "Living Beyond Your Pain" by Joanne Dahl & Tobias Lundgren</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-600">ACT:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• "Get Out of Your Mind & Into Your Life" by Steven Hayes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Frequently asked questions</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How much will this cost?</h3>
              <p className="text-gray-600 leading-relaxed">
                My current rates are consistent with other licensed psychologists in the Bay Area. I work with your
                insurance plan as an out-of-network provider and can offer billing statements for reimbursement. Many
                private plans reimburse 50-100% of therapy costs. I accept check, cash, credit, or Lyra insurance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How do sessions work?</h3>
              <p className="text-gray-600 leading-relaxed">
                The initial session focuses on reviewing your history and current goals. I work collaboratively to
                create reasonable therapy goals. Sessions are approximately 50 minutes and typically occur weekly or
                biweekly. There will be skills practice between sessions, and I offer monthly or booster sessions for
                maintenance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Will I be in therapy forever?</h3>
              <p className="text-gray-600 leading-relaxed">
                The short answer is no. Evidence-based treatments are designed to be effective within 8-12 sessions
                typically. The goal is to teach you skills for a better life that you can implement independently.
                During the initial intake, I can give you a better understanding of expected treatment length based on
                your specific goals and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <p className="text-xl text-gray-600">
              Finding a good fit with your therapist is important. I offer a free 20-minute phone consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">📞</span>
                    <span className="text-gray-600">(925) 297-5475</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">✉️</span>
                    <span className="text-gray-600">lisawrightphd@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 text-teal-600 mr-3">📍</span>
                    <span className="text-gray-600">
                      35-C Avenida de Orinda
                      <br />
                      Orinda, CA 94563
                      <br />
                      <span className="text-sm">(About 1 mile from Orinda BART)</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div>• In-person sessions in Orinda</div>
                  <div>• Video telehealth (California residents)</div>
                  <div>• Individual and group therapy</div>
                  <div>• Pre-surgical evaluations</div>
                  <div>• Consultation and workshops</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can I help you?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
            <h3 className="text-2xl font-bold mb-4">Dr. Lisa Wright</h3>
            <p className="text-gray-400 mb-6">Licensed Clinical Psychologist (PSY22786)</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Insurance Information
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Dr. Lisa Wright. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
