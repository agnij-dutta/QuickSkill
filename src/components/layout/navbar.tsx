import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { BookOpen, LogIn, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const { user, clearAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">QuickSkill</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/dashboard')}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                {!user.isInstructor && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/become-instructor')}
                  >
                    Become an Instructor
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/register')}
                >
                  Become an Instructor
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/login')}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}