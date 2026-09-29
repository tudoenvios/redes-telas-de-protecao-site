/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HomePage from './components/HomePage';
import LocalLandingPage from './components/LocalLandingPage';
import ServiceAreasPage from './components/ServiceAreasPage';
import MosquitoScreensPage from './components/MosquitoScreensPage';
import { findServiceArea } from './data/serviceAreas';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const serviceArea = findServiceArea(pathname);

  if (serviceArea) {
    return <LocalLandingPage area={serviceArea} />;
  }

  if (pathname === '/areas-atendidas') {
    return <ServiceAreasPage />;
  }

  if (pathname === '/telas-mosquiteiras') {
    return <MosquitoScreensPage />;
  }

  return <HomePage />;
}
