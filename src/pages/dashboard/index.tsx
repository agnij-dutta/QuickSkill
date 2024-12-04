import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router-dom';

export function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <p className="mt-2 text-gray-600">Your dashboard is coming soon.</p>
    </div>
  );
}