import React from 'react';

const SharpVenturesComplete = () => {
  console.log('SharpVenturesComplete component rendering');
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      {/* Browser Navigation Bar */}
      <div className="flex items-center w-full h-12 bg-gray-900 border-b border-gray-800 px-4">
        <div className="flex items-center">
          {/* Window control buttons */}
          <div className="flex space-x-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* Browser tab icons */}
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
          </div>
        </div>
        
        {/* URL Bar */}
        <div className="flex mx-auto bg-gray-800 rounded px-3 py-1 text-sm text-gray-400">
          <div className="flex items-center">
            <span className="mr-2">←</span>
            <span className="mr-2">→</span>
            <span className="mr-2">↻</span>
          </div>
          <div className="flex items-center mx-2 px-2 bg-gray-800 rounded">
            sharpventures.com
          </div>
        </div>
        
        {/* Browser actions */}
        <div className="flex items-center space-x-4">
          <div className="text-gray-400">☆</div>
          <div className="text-gray-400">⟳</div>
          <div className="text-gray-400 font-bold">M</div>
          <div className="text-gray-400">⋮</div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Top Row - Two Panels */}
        <div className="flex w-full">
          {/* Food & Beverages Section */}
          <div className="w-1/2 h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-3">
                <div className="w-16 h-40 bg-red-700 rounded-md"></div>
                <div className="w-16 h-40 bg-yellow-600 rounded-md"></div>
                <div className="w-16 h-40 bg-green-600 rounded-md"></div>
              </div>
            </div>
            <div className="absolute bottom-12 left-12 z-10">
              <h2 className="text-6xl font-bold leading-tight">Food &</h2>
              <h2 className="text-6xl font-bold leading-tight">Beverages</h2>
            </div>
          </div>
          
          {/* Beauty & Personal Care Section */}
          <div className="w-1/2 h-96 relative overflow-hidden bg-red-800">
            <div className="absolute inset-0 bg-gradient-to-br from-red-700 to-orange-600 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-end space-x-4">
                <div className="w-24 h-24 bg-orange-400 rounded-full"></div>
                <div className="w-20 h-20 bg-pink-300 rounded-full"></div>
                <div className="w-16 h-16 bg-rose-200 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-12 left-12 z-10">
              <h2 className="text-6xl font-bold leading-tight">Beauty &</h2>
              <h2 className="text-6xl font-bold leading-tight">Personal Care</h2>
            </div>
          </div>
        </div>
        
        {/* Bottom Row - Three Panels */}
        <div className="flex w-full h-72">
          {/* VR/Gaming Section */}
          <div className="w-1/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-900 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-transparent">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-40 h-40 flex items-center justify-center">
                    {/* Simplified VR headset silhouette */}
                    <div className="w-32 h-20 bg-gray-800 rounded-lg relative">
                      <div className="absolute top-6 left-3 w-6 h-2 bg-blue-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pharmaceuticals Section */}
          <div className="w-1/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-teal-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-teal-100 flex items-center justify-center">
                <div className="flex flex-wrap gap-2 p-4 content-center justify-center">
                  {/* Pills representation */}
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className={`w-10 h-4 ${i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-yellow-300'} rounded-full`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Plants/Nature Section */}
          <div className="w-1/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-green-800 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Simplified plant representation */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 flex items-center justify-center opacity-70">
                  <div className="w-32 h-40 bg-green-700 relative rounded-sm">
                    <div className="absolute -top-3 -left-3 w-16 h-16 bg-green-500 rounded-tl-full"></div>
                    <div className="absolute -top-2 right-4 w-14 h-14 bg-green-400 rounded-tr-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharpVenturesComplete;