"use client";
import Image from "next/image";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('all');

  const topics = [
    {
      id: 1,
      title: "Redux Toolkit Basics",
      description: "Master the fundamentals of modern state management with Redux Toolkit",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      category: "basics",
      difficulty: "Beginner",
      duration: "2 hours",
      topics: ["Store Setup", "Slice Creation", "Actions & Reducers"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Advanced State Patterns",
      description: "Learn advanced Redux patterns and best practices for scalable applications",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f2?w=800&h=400&fit=crop",
      category: "advanced",
      difficulty: "Intermediate",
      duration: "3 hours",
      topics: ["Async Thunks", "Middleware", "Selectors"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Real-World Projects",
      description: "Build production-ready applications with Redux Toolkit and best practices",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      category: "projects",
      difficulty: "Intermediate",
      duration: "4 hours",
      topics: ["User Management", "Todo List", "API Integration"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "Optimize Redux applications for maximum performance and efficiency",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop",
      category: "performance",
      difficulty: "Advanced",
      duration: "2.5 hours",
      topics: ["Memoization", "Batching", "Normalization"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Testing Redux Apps",
      description: "Master testing strategies for Redux applications with comprehensive coverage",
      image: "https://images.unsplash.com/photo-1555949968-06919e0d79c8?w=800&h=400&fit=crop",
      category: "testing",
      difficulty: "Advanced",
      duration: "3 hours",
      topics: ["Unit Tests", "Integration Tests", "E2E Testing"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "RTK Query & Data Fetching",
      description: "Master RTK Query for powerful data fetching and caching solutions",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      category: "data",
      difficulty: "Intermediate",
      duration: "2.5 hours",
      topics: ["Query Basics", "Mutations", "Caching"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = ["all", "basics", "advanced", "projects", "performance", "testing", "data"];

  const filteredTopics = activeSection === 'all' 
    ? topics 
    : topics.filter(topic => topic.category === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RTK</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Redux Toolkit</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
                <Link href="/api" className="text-gray-700 hover:text-purple-600 transition-colors">API Demo</Link>
                <Link href="/todolist" className="text-gray-700 hover:text-purple-600 transition-colors">Todo App</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Redux Toolkit
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Build scalable, maintainable applications with modern state management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Redux Toolkit?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern state management with less boilerplate, better developer experience, and powerful tools
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance with minimal boilerplate and maximum efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Friendly</h3>
              <p className="text-gray-600">Intuitive APIs with excellent TypeScript support and DX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600">Battle-tested in production applications worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Topics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all aspects of Redux Toolkit
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveSection(category)}
                className={`px-4 py-2 rounded-full capitalize transition-colors ${
                  activeSection === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Topic Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${topic.color} opacity-60`}></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                      {topic.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">⏱️ {topic.duration}</span>
                      <span>📚 {topic.topics.length} topics</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.topics.map((item, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  <button className={`w-full bg-gradient-to-r ${topic.color} text-white py-2 rounded-lg hover:opacity-90 transition-opacity`}>
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Demo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See Redux Toolkit in action with our interactive user management demo
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Add User</h3>
                <AddUser />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">User List</h3>
                <DisplayUser />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">RTK</span>
              </div>
              <span className="font-bold text-xl">Redux Toolkit Masterclass</span>
            </div>
            <p className="text-gray-400">Master modern state management with ease</p>
            <p className="text-gray-500 text-sm mt-2">© 2024 - Built with ❤️ and Redux Toolkit</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
