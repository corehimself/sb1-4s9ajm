'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface IconProps {
  icon: {
    name: string;
    category: string;
    subCategory: string;
    sizes: number[];
  };
}

export function IconCard({ icon }: IconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (size: number) => {
    const link = document.createElement('a');
    link.href = `/icons/${icon.category}/${icon.subCategory}/${icon.name}_${size}.png`;
    link.download = `${icon.name}_${size}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      className="relative group transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className="relative w-16 h-16 mb-2">
          <Image
            src={`/icons/${icon.category}/${icon.subCategory}/${icon.name}_64.png`}
            alt={icon.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="text-sm font-medium text-center">{icon.name}</span>
        {isHovered && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="mt-2">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {icon.sizes.map((size) => (
                <DropdownMenuItem key={size} onSelect={() => handleDownload(size)}>
                  {size}x{size}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardContent>
    </Card>
  );
}