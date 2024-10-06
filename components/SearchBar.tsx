'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // TODO: Implement search functionality
  };

  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search icons..."
        value={search}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2"
      />
    </div>
  );
}