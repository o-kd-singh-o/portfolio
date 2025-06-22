import { Github, Linkedin, Mail, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800/50 border-t border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
              KD
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">KD Singh</h4>
              <p className="text-gray-400 mb-4">connect@kdsingh.ca</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Interactive Tech Showcase</h5>
                  <p className="text-gray-400 text-sm">Live demos and prototypes coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 KD Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}