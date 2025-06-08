import React from 'react';
import { Menu, X, ShoppingBag, Star, Truck, Shield, Phone, Mail, MapPin, Users, Award, Clock, ArrowRight, Quote } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedShoe, setSelectedShoe] = React.useState(0);

  const shoes = [
    {
      id: 1,
      name: "Nike Air Max 270",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      name: "Nike React Infinity",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      name: "Nike Zoom Pegasus",
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800",
      thumbnail: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing quality and fast shipping! The Nike Air Max 270 exceeded my expectations. Super comfortable for daily wear.",
      product: "Nike Air Max 270",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Best online shoe store I've ever used. Authentic products, great customer service, and the website is so easy to navigate.",
      product: "Nike React Infinity",
      date: "1 month ago"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Love my new Nike Zoom Pegasus! Perfect for running and the delivery was incredibly fast. Will definitely order again.",
      product: "Nike Zoom Pegasus",
      date: "3 weeks ago"
    },
    {
      name: "David Thompson",
      rating: 5,
      comment: "Outstanding customer service and product quality. The shoes arrived exactly as described and fit perfectly.",
      product: "Nike Air Max 270",
      date: "1 week ago"
    }
  ];

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
              <div className="max-w-xl">
                <p className="text-lg text-gray-600 mb-4">Our New Collection</p>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The New Arrival <span className="text-orange-500">Nike</span> Shoes
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                  Discover stylish Nike Quality
                </p>
                
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  ORDER NOW
                </button>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-8 mt-16">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">1K+</div>
                    <div className="text-sm font-medium text-gray-600">Per Week</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm font-medium text-gray-600">Per Month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">250K+</div>
                    <div className="text-sm font-medium text-gray-600">Per Year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Shoe Gallery */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-orange-500 rounded-full opacity-30"></div>
              <div className="absolute top-20 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-50"></div>
              <div className="absolute bottom-32 left-8 w-16 h-16 bg-blue-400 rounded-full opacity-40"></div>

              {/* Main Shoe Display */}
              <div className="relative mb-8">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl flex items-center justify-center p-8 shadow-2xl">
                  <img
                    src={shoes[selectedShoe].image}
                    alt={shoes[selectedShoe].name}
                    className="w-full h-full object-contain transform transition-all duration-500 hover:scale-110"
                    key={selectedShoe}
                  />
                </div>
              </div>

              {/* Shoe Thumbnails */}
              <div className="flex space-x-4">
                {shoes.map((shoe, index) => (
                  <button
                    key={shoe.id}
                    onClick={() => setSelectedShoe(index)}
                    className={`w-20 h-20 rounded-2xl p-3 transition-all duration-300 transform hover:scale-110 ${
                      selectedShoe === index
                        ? 'bg-white shadow-lg ring-4 ring-orange-500'
                        : 'bg-white/80 hover:bg-white shadow-md'
                    }`}
                  >
                    <img
                      src={shoe.thumbnail}
                      alt={shoe.name}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Selected Shoe Name */}
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-bold">{shoes[selectedShoe].name}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% authentic Nike products</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Reviews</h3>
              <p className="text-gray-600">4.9/5 rating from 10,000+ customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular Nike shoes, carefully selected for style, comfort, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nike Air Max 270",
                price: "$150",
                image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Nike React Infinity",
                price: "$160",
                image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Nike Zoom Pegasus",
                price: "$120",
                image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square bg-gray-100 p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                    <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-orange-500 transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About SOLORUSH</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in authentic Nike footwear since 2020
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, SOLORUSH began with a simple mission: to make authentic Nike shoes accessible to everyone. What started as a small online store has grown into a trusted destination for sneaker enthusiasts worldwide.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that the right pair of shoes can transform not just your look, but your entire day. That's why we're committed to offering only genuine Nike products, backed by exceptional customer service and fast, reliable shipping.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to serve over 250,000 customers annually, maintaining our commitment to quality, authenticity, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nike shoes collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">250K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                Every product we sell is 100% authentic Nike merchandise, sourced directly from authorized distributors.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to ensure every customer has an exceptional experience.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                From product selection to customer service, we maintain the highest standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.product}</div>
                  <div className="text-xs text-gray-400 mt-1">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence reflected in our achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">250K+</div>
              <div className="text-gray-300">Customers Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">4.9/5</div>
              <div className="text-gray-300">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-300">Authentic Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            We're here to help with any questions about our products or services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">support@solorush.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Sneaker Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Are all your Nike shoes authentic?</h3>
                <p className="text-gray-600">Yes, we guarantee 100% authenticity on all our Nike products. We source directly from authorized Nike distributors.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600">We offer a 30-day return policy for unworn items in original packaging. Returns are free for orders over $100.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">Currently, we ship within the United States only. International shipping will be available soon.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I track my order?</h3>
                <p className="text-gray-600">Yes, you'll receive a tracking number via email once your order ships. You can track your package in real-time.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you have a size guide?</h3>
                <p className="text-gray-600">Yes, we provide detailed size guides for all Nike models. You can find them on each product page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const SignUpPage = () => (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join SOLORUSH</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Create your account and get exclusive access to new releases and member-only deals
          </p>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Account</h2>
              <p className="text-gray-600">
                Join thousands of satisfied customers and get access to exclusive benefits
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                    Subscribe to our newsletter for exclusive deals and new product announcements
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-orange-500 hover:text-orange-600">Terms of Service</a> and <a href="#" className="text-orange-500 hover:text-orange-600">Privacy Policy</a> *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Create Account</span>
                <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account? 
                <button className="text-orange-500 hover:text-orange-600 font-medium ml-1">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy exclusive perks when you join the SOLORUSH community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Early Access</h3>
              <p className="text-gray-600">Get first access to new Nike releases and limited edition drops</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Truck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Enjoy free shipping on all orders, no minimum purchase required</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Deals</h3>
              <p className="text-gray-600">Access member-only discounts and special promotional offers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SR</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">SOLORUSH</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => navigateTo('home')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  currentPage === 'contact' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => navigateTo('signup')}
              className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Sign up/Explore
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => navigateTo('home')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                About Us
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
              >
                Contact
              </button>
              <button 
                onClick={() => navigateTo('signup')}
                className="block w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Sign up/Explore
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'signup' && <SignUpPage />}

      {/* Black Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">SR</span>
                </div>
                <span className="text-2xl font-bold">SOLORUSH</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your premier destination for authentic Nike shoes. We bring you the latest collections with unmatched quality and style.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button 
                    onClick={() => navigateTo('home')}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('about')}
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('contact')}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('signup')}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-bold mb-6">Customer Service</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 SOLORUSH. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;