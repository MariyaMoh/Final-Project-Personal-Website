import { gql } from '@apollo/client';
import client from '../apolloClient';
import Experience from '../Components/Experience';
import Services from '../Components/Services';
import { Service, Profile, About } from '../types';
import ProfileSection from '../Components/AboutMe';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Movingtitle from '../Components/movingtitle';


interface HomeProps {
  services: Service[];
  profiles: Profile[];
  abouts: About[];
}

export default function Home({ services, profiles, abouts }: HomeProps) {
  return (
    <>
      <Movingtitle />
      <ProfileSection profiles={profiles} />
      <Services services={services} />
      <Experience abouts={abouts} />

      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        services {
          image {
            url
          }
          id
          title
          slug
          description
        }

        profiles {
          profileImage {
            url
          }
          name
          position
          slug
          id
        }
        abouts {
          experienceTitle
          description
          id
          slug
        }
      }
    `,
  });
  console.log(data);
  const { services, profiles, abouts } = data;
  return {
    props: {
      services,
      profiles,
      abouts,
    },
  };
}
