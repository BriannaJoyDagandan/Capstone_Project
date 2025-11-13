import React from 'react';
import { BLOG_POSTS } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const BlogPage: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Travel Blog</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Read stories, guides, and tips from travelers and locals to help you plan your perfect La Trinidad adventure.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt={post.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{post.badge}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow mb-4">{post.description}</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      <p><i className="fas fa-user mr-1"></i> {post.author}</p>
                      <p><i className="fas fa-calendar mr-1"></i> {post.date}</p>
                    </div>
                    <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-800 transition-colors">
                      Read <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement className="mt-16 text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                View All Articles
            </button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BlogPage;