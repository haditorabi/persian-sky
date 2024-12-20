import React from 'react';

interface ListingCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  onClick: () => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ title, description, imageUrl, price, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-green-500 font-bold">{price}</span>
      </div>
    </div>
  );
};

export default ListingCard;