// src/components/withAdminAuth.js
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAdminAuth(WrappedComponent) {
  return function Protected(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || user.role !== 'admin')) {
        router.replace('/login');
      }
    }, [user, loading, router]);

    if (loading || !user || user.role !== 'admin') {
      return <p>Loading or redirecting…</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
