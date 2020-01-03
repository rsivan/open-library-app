import { Author } from './author';

export interface Work {
    id: string;
    title: string;
    description: string;
    authors: Author[];
    covers: string[];
}
