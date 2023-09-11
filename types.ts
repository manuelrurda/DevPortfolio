interface ProjectData {
  name: string;
  thumbnailUrl: string;
  techTags: string[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface configData {
  featuredProject: string;
  projects: string[];
  timelineElements: timelineElementData[];
}

interface timelineElementData {
  id: number;
  title: string;
  company?: string;
  logoUrl?: string;
  location: string;
  description?: string;
  date: string;
  icon: "work" | "education" | "freelance";
}
