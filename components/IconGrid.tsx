'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconCard } from '@/components/IconCard';

interface Icon {
  name: string;
  category: string;
  subCategory: string;
  sizes: number[];
}

export function IconGrid() {
  const [icons, setIcons] = useState<Icon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('/api/icons');
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        console.error('Error fetching icons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, []);

  if (loading) {
    return <div className="text-center">Loading icons...</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {icons.map((icon) => (
        <IconCard key={`${icon.category}-${icon.subCategory}-${icon.name}`} icon={icon} />
      ))}
    </div>
  );
}