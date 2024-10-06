import { SearchBar } from '@/components/SearchBar';
import { IconGrid } from '@/components/IconGrid';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Icon Search</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        <IconGrid />
      </main>
    </div>
  );
}