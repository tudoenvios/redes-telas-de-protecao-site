/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HomePage from './components/HomePage';
import LocalLandingPage from './components/LocalLandingPage';
import ServiceAreasPage from './components/ServiceAreasPage';
import MosquitoScreensPage from './components/MosquitoScreensPage';
import ServiceTopicPage from './components/ServiceTopicPage';
import ProtectionPillarPage from './components/ProtectionPillarPage';
import { findServiceArea } from './data/serviceAreas';
import { findServiceTopic } from './data/serviceTopics';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const serviceArea = findServiceArea(pathname);
  const serviceTopic = findServiceTopic(pathname);

  if (serviceArea) {
    return <LocalLandingPage area={serviceArea} />;
  }

  if (serviceTopic) {
    return <ServiceTopicPage topic={serviceTopic} />;
  }

  if (pathname === '/areas-atendidas') {
    return <ServiceAreasPage />;
  }

  if (pathname === '/telas-mosquiteiras') {
    return <MosquitoScreensPage />;
  }

  if (pathname === '/rede-de-protecao') {
    return <ProtectionPillarPage />;
  }

  return <HomePage />;
}
