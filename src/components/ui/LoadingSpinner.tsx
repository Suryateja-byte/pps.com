import React, { useState, useEffect } from 'react';

export function LoadingSpinner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return <div className="min-h-[60vh]" />;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-orange rounded-full animate-spin"></div>
    </div>
  );
}
