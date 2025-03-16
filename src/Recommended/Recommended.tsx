import React from "react";

interface RecommendedProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Recommended: React.FC<RecommendedProps> = ({ handleClick }) => {
  return (
    <div>
      <div className="btn-container mb-16 flex justify-center">
        <button
          onClick={handleClick}
          className="filter-btn"
          type="button"
          value=""
          title="All"
        >
          all
        </button>
        <button
          onClick={handleClick}
          className="filter-btn"
          type="button"
          value="breakfast"
          title="Breakfast"
        >
          breakfast
        </button>
        <button
          onClick={handleClick}
          className="filter-btn"
          type="button"
          value="lunch"
          title="Lunch"
        >
          lunch
        </button>
        <button
          onClick={handleClick}
          className="filter-btn"
          type="button"
          value="shakes"
          title="Milkshake"
        >
          shakes
        </button>
      </div>
    </div>
  );
};

export default Recommended;
