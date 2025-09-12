export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Welcome message */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Welcome to your beautiful Next.js application!
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This is a modern, responsive Hello World page built with Next.js 15 and Tailwind CSS. 
            It features clean typography, smooth gradients, and a mobile-first design approach.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">Built with Next.js for optimal performance and lightning-fast loading.</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
            <p className="text-gray-600 text-sm">Looks beautiful on all devices with mobile-first design principles.</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🎨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Modern</h3>
            <p className="text-gray-600 text-sm">Clean, modern design with Tailwind CSS and smooth animations.</p>
          </div>
        </div>
        
        {/* Footer message */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Ready to start building something amazing? Let's code! 🚀
          </p>
        </div>
      </div>
    </main>
  )
}