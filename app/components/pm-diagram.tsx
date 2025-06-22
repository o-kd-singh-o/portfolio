export default function PMDiagram() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">The PM Diagram</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Product Management sits at the intersection of Technology (Architecture design, databases, complexity, speed), 
            People (User experience, intuitiveness, emotions, ease of use) & Business/Market (Business & market requirements, 
            changing regulations, geopolitics, new & defending existing opportunities) driving company growth and innovation.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
            {/* Venn Diagram SVG */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="customerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Tech Circle */}
              <circle 
                cx="200" 
                cy="140" 
                r="80" 
                fill="url(#techGradient)" 
                stroke="#3B82F6" 
                strokeWidth="2"
                className="animate-pulse-slow"
              />
              
              {/* Business Circle */}
              <circle 
                cx="150" 
                cy="220" 
                r="80" 
                fill="url(#businessGradient)" 
                stroke="#10B981" 
                strokeWidth="2"
                className="animate-pulse-slow"
              />
              
              {/* Customer Circle */}
              <circle 
                cx="250" 
                cy="220" 
                r="80" 
                fill="url(#customerGradient)" 
                stroke="#F59E0B" 
                strokeWidth="2"
                className="animate-pulse-slow"
              />

              {/* Labels */}
              <text x="200" y="80" textAnchor="middle" className="fill-blue-400 text-sm font-semibold">Tech</text>
              <text x="90" y="280" textAnchor="middle" className="fill-green-400 text-sm font-semibold">Business/Market</text>
              <text x="310" y="280" textAnchor="middle" className="fill-yellow-400 text-sm font-semibold">Customer/User</text>
              
              {/* Center PM label */}
              <text x="200" y="195" textAnchor="middle" className="fill-white text-lg font-bold">PM</text>
            </svg>

            {/* Growth indicator */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Company growth and innovation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}