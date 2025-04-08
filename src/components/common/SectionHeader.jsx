import React from 'react';
import { Badge } from '@/components/ui/badge';


const SectionHeader = ({ title,description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-2">
                    <div className="space-y-2">
                      <Badge className="px-3 py-1 text-sm text-blue-600" variant="secondary">
                        {title}
                      </Badge>
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">{title}</h1>
                      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            {description}
                      </p>
                    </div>
            </div>
  );
};

export default SectionHeader;