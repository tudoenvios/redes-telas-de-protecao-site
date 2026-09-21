/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import LocalLandingPage from './components/LocalLandingPage';
import ServiceAreasPage from './components/ServiceAreasPage';
import { findServiceArea } from './data/serviceAreas';

const HomePage = lazy(() => import('./components/HomePage'));

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const serviceArea = findServiceArea(pathname);

  if (serviceArea) {
    return <LocalLandingPage area={serviceArea} />;
  }

  if (pathname === '/areas-atendidas') {
    return <ServiceAreasPage />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-50" aria-busy="true" />}>
      <HomePage />
    </Suspense>
  );
}
