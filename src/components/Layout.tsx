import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <main className="flex-1 p-8 mt-12 md:mt-16 ml-0 md:ml-64 transition-all">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;