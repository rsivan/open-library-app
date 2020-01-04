import { Author } from './author';

export interface Work {
    id: string;
    title: string;
    description: string;
    authors: Author[];
    covers: string[];
    subjects: string[];
    subject_people: string[];
    subject_places: string[];
    subject_times: string[];
}
