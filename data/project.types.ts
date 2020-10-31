export type Projects = {
  projects: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imgUrl: string;
    liveUrl: string;
    repoUrl: string;
    featured: boolean;
  }[];
};

export type Project = {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imgUrl: string;
    liveUrl: string;
    repoUrl: string;
    featured: boolean;
  };
};
