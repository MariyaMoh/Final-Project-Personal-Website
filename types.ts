export interface Service {
  image: {
    url: string;
  };
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Profile {
  profileImage: {
    url: string;
  };
  name: string;
  position: string;
  slug: string;
  id: string;
}

export interface About {
  experienceTitle: string;
  description: string;
  id: string;
  slug: string;
}
