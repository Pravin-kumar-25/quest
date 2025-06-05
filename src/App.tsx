import { useState } from 'react';
import { Sidebar } from './components/ui/sidebar';

function App() {

  return (
    <div className="p-6 space-y-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Sidebar />
    </div>
  );
}

export default App;
