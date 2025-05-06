import { useState, useEffect } from 'react';

// Robust mock competitor data for instant UI feedback
const MOCK_DATA = [
  { id: 'botox', treatment: 'Botox', pureSkin: 12, mdBeauty: 11, beverlyHills: 9.5 },
  { id: 'filler', treatment: 'Filler', pureSkin: 600, mdBeauty: 650, beverlyHills: 550 },
  { id: 'rf', treatment: 'RF Microneedling', pureSkin: 350, mdBeauty: 400, beverlyHills: 300 }
];

export default function useMedSpaData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
}
