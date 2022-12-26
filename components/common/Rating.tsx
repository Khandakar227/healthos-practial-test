import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Rating({
  className,
  rating,
  total = 5,
}: {
  className?: string;
  rating: number;
  total?: number;
}) {
  return (
    <div className="flex gap-1 items-center">
      {Array(total)
        .fill(1)
        .map((_, i) =>
          rating / (i + 1) >= 1 ? (
            <FaStar key={`star ${i + 1}`} fill="gold" />
          ) : (i+1) - rating < 1 ? (
            <FaStarHalf key={`star ${i + 1}`} fill="gold" />
          ) : (
            ""
          )
        )}
    </div>
  );
}

export default Rating;
