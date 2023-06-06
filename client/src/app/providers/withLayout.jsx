import React from "react";
import Header from "widgets/header/Header";

export default function WithLayout({ children }) {
  return (
    <div className="bg-white max-h-screen p-10 pt-20 flex justify-center">
      <Header />
      {children}
    </div>
  );
}
