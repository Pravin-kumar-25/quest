import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <main>
        </main>
        <footer className="py-8 bg-red-500 text-center text-muted-foreground border-t border-border">
          <p>&copy; 2025 Pravin Kumar. Built with React and passion.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;