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
    mediaType: 'video',
    src: '/media/20ft.mp4',
    poster: '/media/20ft.jpg',
    ctaKey: '20ft Standard',
  },
  {
    id: '40ft-standard',
    title: '40ft Standard',
    subtitle: 'Great value and volume for larger operations, workshops, or retail fit-outs.',
    tags: ['Workshop', 'Retail', 'Value'],
    mediaType: 'image',
    src: '/media/40ft.jpg',
    ctaKey: '40ft Standard',
  },
  {
    id: '40ft-high-cube',
    title: '40ft High Cube',
    subtitle: 'Extra headroom for premium conversions, offices, and rental-ready concepts.',
    tags: ['Office', 'Rental Unit', 'High Ceiling'],
    mediaType: 'video',
    src: '/media/high-cube.mp4',
    poster: '/media/high-cube.jpg',
    ctaKey: '40ft High Cube',
  },
  {
    id: '20ft-office-modified',
    title: '20ft Office / Modified',
    subtitle: 'Ready-to-adapt spaces for admin offices, kiosks, or on-site command rooms.',
    tags: ['Office', 'Modified', 'Fast Setup'],
    mediaType: 'image',
    src: '/media/office.jpg',
    ctaKey: '20ft Office/Modified',
  },
  {
    id: '40ft-reefer',
    title: '40ft Reefer',
    subtitle: 'Temperature-sensitive storage with dependable insulation and logistics support.',
    tags: ['Cold Storage', 'Food', 'Pharma'],
    mediaType: 'image',
    src: '/media/reefer.jpg',
    ctaKey: '40ft Reefer',
  },
];
