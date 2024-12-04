import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/auth/login';
import { RegisterPage } from './pages/auth/register';
import { DashboardPage } from './pages/dashboard';
import { InstructorOnboardingPage } from './pages/instructor/onboarding';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/become-instructor" element={<InstructorOnboardingPage />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}