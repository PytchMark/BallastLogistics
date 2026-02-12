export type ContainerItem = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  mediaType: 'video' | 'image';
  src?: string;
  poster?: string;
  ctaKey: string;
};

export const containers: ContainerItem[] = [
  {
    id: '20ft-standard',
    title: '20ft Standard',
    subtitle: 'A flexible footprint for pop-up retail, secure storage, and starter builds.',
    tags: ['Business', 'Storage', 'Compact'],
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770935110/IMG-20260210-WA0093_c3yvrc.jpg',
    ctaKey: '20ft Standard',
  },
  {
    id: '40ft-standard',
    title: '40ft Standard',
    subtitle: 'Great value and volume for larger operations, workshops, or retail fit-outs.',
    tags: ['Workshop', 'Retail', 'Value'],
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770935112/IMG-20260210-WA0031_c3emxw.jpg',
    ctaKey: '40ft Standard',
  },
  {
    id: '40ft-high-cube',
    title: '40ft High Cube',
    subtitle: 'Extra headroom for premium conversions, offices, and rental-ready concepts.',
    tags: ['Office', 'Rental Unit', 'High Ceiling'],
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770935109/IMG-20260210-WA0088_kmg1zm.jpg',
    ctaKey: '40ft High Cube',
  },
  {
    id: '20ft-office-modified',
    title: '20ft Office / Modified',
    subtitle: 'Ready-to-adapt spaces for admin offices, kiosks, or on-site command rooms.',
    tags: ['Office', 'Modified', 'Fast Setup'],
    mediaType: 'image',
    src: 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770935109/IMG-20260210-WA0117_mhz9ja.jpg',
    ctaKey: '20ft Office/Modified',
  },
  {
    id: '40ft-reefer',
    title: '40ft Reefer',
    subtitle: 'Temperature-sensitive storage with dependable insulation and logistics support.',
    tags: ['Cold Storage', 'Food', 'Pharma'],
    mediaType: 'video',
    src: 'https://res.cloudinary.com/dd8pjjxsm/video/upload/v1770935113/VID-20260210-WA0128_gk2t77.mp4',
    poster: 'https://res.cloudinary.com/dd8pjjxsm/image/upload/v1770935111/IMG-20260210-WA0076_isulfq.jpg',
    ctaKey: '40ft Reefer',
  },
];
