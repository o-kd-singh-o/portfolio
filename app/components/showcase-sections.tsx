import { Briefcase, Users, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ShowcaseSections() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* My Work */}
          <Card id="work" className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
            <CardContent className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <Briefcase className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">My Work</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore my professional projects, product launches, and the innovative solutions I've built. 
                Each project showcases different aspects of product management from conception to delivery.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Product Strategy & Roadmaps
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  User Research & Analytics
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Cross-functional Leadership
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="mt-8 text-blue-400 hover:text-blue-300 p-0 group-hover:translate-x-2 transition-transform duration-200"
              >
                Explore Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Community */}
          <Card id="community" className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
            <CardContent className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Community</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connect with my contributions to the product management community. From workshops and mentoring 
                to thought leadership and knowledge sharing initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Workshops & Speaking
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Mentoring & Coaching
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Thought Leadership
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="mt-8 text-green-400 hover:text-green-300 p-0 group-hover:translate-x-2 transition-transform duration-200"
              >
                Join Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Outside Work */}
          <Card id="outside-work" className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
            <CardContent className="p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                  <Code className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Outside Work</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover my personal projects, side ventures, and creative explorations. These projects reflect 
                my passion for innovation and continuous learning beyond traditional PM roles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Personal Projects
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Creative Experiments
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Open Source Contributions
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="mt-8 text-purple-400 hover:text-purple-300 p-0 group-hover:translate-x-2 transition-transform duration-200"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}