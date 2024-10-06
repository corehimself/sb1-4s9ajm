import fs from 'fs/promises';
import path from 'path';

interface Icon {
  name: string;
  category: string;
  subCategory: string;
  sizes: number[];
}

export async function getIcons(): Promise<Icon[]> {
  const iconsDir = path.join(process.cwd(), 'public', 'icons');
  const icons: Icon[] = [];

  try {
    const categories = await fs.readdir(iconsDir);

    for (const category of categories) {
      const categoryPath = path.join(iconsDir, category);
      const subCategories = await fs.readdir(categoryPath);

      for (const subCategory of subCategories) {
        const subCategoryPath = path.join(categoryPath, subCategory);
        const files = await fs.readdir(subCategoryPath);

        const iconNames = new Set<string>();
        const sizes = new Set<number>();

        for (const file of files) {
          const match = file.match(/^(.+)_(\d+)\.\w+$/);
          if (match) {
            const [, name, size] = match;
            iconNames.add(name);
            sizes.add(parseInt(size, 10));
          }
        }

        for (const name of iconNames) {
          icons.push({
            name,
            category,
            subCategory,
            sizes: Array.from(sizes),
          });
        }
      }
    }
  } catch (error) {
    console.error('Error reading icon directory:', error);
  }

  return icons;
}