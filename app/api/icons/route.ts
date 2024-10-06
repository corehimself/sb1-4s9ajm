import { NextResponse } from 'next/server';
import { getIcons } from '@/lib/getIcons';

export async function GET() {
  try {
    const icons = await getIcons();
    return NextResponse.json(icons);
  } catch (error) {
    console.error('Error fetching icons:', error);
    return NextResponse.json({ error: 'Failed to fetch icons' }, { status: 500 });
  }
}