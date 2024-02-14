"use client"

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


interface StarRatingProps {
  initialRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating }) => {
  const roundedRating = Math.round(initialRating);

  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={starValue}>
            <FaStar
              className="star"
              color={starValue <= roundedRating ? '#ffc107' : '#e4e5e9'}
              size={16}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
