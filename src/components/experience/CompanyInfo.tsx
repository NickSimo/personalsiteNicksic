import React from 'react';
import { Building, MapPin, Calendar } from 'lucide-react';

interface CompanyInfoProps {
  company: string;
  location: string;
  period: string;
}

const CompanyInfo = ({ company, location, period }: CompanyInfoProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4 text-gray-400">
      <div className="flex items-center">
        <Building className="w-4 h-4 mr-2 text-accent-500" />
        <span>{company}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2 text-accent-500" />
        <span>{location}</span>
      </div>
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-2 text-accent-500" />
        <span>{period}</span>
      </div>
    </div>
  );
};

export default CompanyInfo;