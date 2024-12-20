import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center">Welcome to PersianSky</h1>
        <p className="mt-4 text-lg text-center">
          Your go-to platform for discovering local services and listings.
        </p>
        <a href="/listings" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Explore Listings
        </a>
      </div>
    </Layout>
  );
};

export default Home;