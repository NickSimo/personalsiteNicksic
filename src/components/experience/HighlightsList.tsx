import React from 'react';

interface HighlightsListProps {
  highlights: string[];
}

const HighlightsList = ({ highlights }: HighlightsListProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-accent-500 mb-2">Key Responsibilities:</h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-sm">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsList;