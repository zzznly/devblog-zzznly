export interface Post {
  id: number;
  title: string;
  content: string;
}

export type PostBody = Omit<Post, 'id'>;
