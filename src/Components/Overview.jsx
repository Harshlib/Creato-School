import React from 'react'

function Overview() {
  return (
    <div className="bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-800 py-20 flex flex-col items-center text-white">
      <h2 className="text-4xl font-bold mb-10">
        Our <span className="text-emerald-400">Courses</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-emerald-800/40 to-emerald-900/30 border border-emerald-500/30 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50">
          <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <span className="text-3xl">📘</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Course 1</h3>
          <p className="text-gray-300">
            Learn the basics and build a strong foundation in web development.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-emerald-800/40 to-emerald-900/30 border border-emerald-500/30 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50">
          <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <span className="text-3xl">💻</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Course 2</h3>
          <p className="text-gray-300">
            Dive deeper into React and build advanced UI components.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-emerald-800/40 to-emerald-900/30 border border-emerald-500/30 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50">
          <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-xl flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Course 3</h3>
          <p className="text-gray-300">
            Master full-stack skills and deploy professional applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview
