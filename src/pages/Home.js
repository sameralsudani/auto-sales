import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeturedRooms from '../components/FeaturedRooms';
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Awesome cars" subtitle="new cars starting at $16190">
          <Link to="/rooms" className="btn-primary">
            our Cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </>
  );
}
