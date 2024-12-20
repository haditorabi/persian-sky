import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ListingDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/listings/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setListing(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching listing:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found.</div>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <p>{listing.description}</p>
      <p>Contact: {listing.contact}</p>
      <p>Location: {listing.location}</p>
    </Layout>
  );
};

export default ListingDetail;