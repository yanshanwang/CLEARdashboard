import React from 'react';
import Header from "@/components/layouts/Header"; 

const LayoutSearch = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default LayoutSearch;