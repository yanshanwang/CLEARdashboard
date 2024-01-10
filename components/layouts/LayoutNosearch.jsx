import React from 'react';
import Header1 from "@/components/layouts/Header1"; 

const LayoutNosearch = ({ children }) => {
  return (
    <div>
      <Header1/>
      {children}
    </div>
  );
};

export default LayoutNosearch;