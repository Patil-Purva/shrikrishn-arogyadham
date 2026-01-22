export interface Course {
  id?: string;
  title: string;
  description: string;
  price: number;
  previewVideoUrl: string;
  videos: string[];
  thumbnailUrl: string;
  createdAt: any;
}
