import React, { Suspense } from "react";
import Routes from "pages/routes";

export default function App() {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Routes />
      </Suspense>
    </>
  );
}
