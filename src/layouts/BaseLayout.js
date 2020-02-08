import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;