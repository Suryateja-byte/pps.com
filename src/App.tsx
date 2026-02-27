/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const JobSeekers = lazy(() => import('./pages/JobSeekers').then(module => ({ default: module.JobSeekers })));
const Employers = lazy(() => import('./pages/Employers').then(module => ({ default: module.Employers })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Locations = lazy(() => import('./pages/Locations').then(module => ({ default: module.Locations })));
const WhyChoosePPS = lazy(() => import('./pages/WhyChoosePPS').then(module => ({ default: module.WhyChoosePPS })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Suspense fallback={<LoadingSpinner />}><Home /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<LoadingSpinner />}><About /></Suspense>} />
          <Route path="job-seekers" element={<Suspense fallback={<LoadingSpinner />}><JobSeekers /></Suspense>} />
          <Route path="employers" element={<Suspense fallback={<LoadingSpinner />}><Employers /></Suspense>} />
          <Route path="services" element={<Suspense fallback={<LoadingSpinner />}><Services /></Suspense>} />
          <Route path="locations" element={<Suspense fallback={<LoadingSpinner />}><Locations /></Suspense>} />
          <Route path="why-pps" element={<Suspense fallback={<LoadingSpinner />}><WhyChoosePPS /></Suspense>} />
          <Route path="blog" element={<Suspense fallback={<LoadingSpinner />}><Blog /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster position="top-center" richColors />
          <AnimatedRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

