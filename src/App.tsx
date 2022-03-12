import { Header } from 'components/Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from 'routes';
export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
