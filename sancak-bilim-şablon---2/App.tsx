
import React, { useState, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import PortalLayout from './components/layout/PortalLayout';
import { User, UserRole } from './types';
import { 
  Atom, FlaskConical, Calculator, Globe, 
  Dna, GraduationCap, Variable, Shapes
} from 'lucide-react';

// Lazy loading pages
const Home = React.lazy(() => import('./pages/public/Home'));
const Courses = React.lazy(() => import('./pages/public/Courses'));
const Teachers = React.lazy(() => import('./pages/public/Teachers'));
const Login = React.lazy(() => import('./pages/public/Login'));
const Contact = React.lazy(() => import('./pages/public/Contact'));
const About = React.lazy(() => import('./pages/public/About'));
const Blog = React.lazy(() => import('./pages/public/Blog'));
const BlogPost = React.lazy(() => import('./pages/public/BlogPost'));

// Admin Pages
const AdminDashboard = React.lazy(() => import('./pages/portal/admin/Dashboard'));
const AdminStudents = React.lazy(() => import('./pages/portal/admin/Students'));
const AdminTeachers = React.lazy(() => import('./pages/portal/admin/Teachers'));
const AdminCourses = React.lazy(() => import('./pages/portal/admin/AdminCourses'));
const AdminCalendar = React.lazy(() => import('./pages/portal/admin/Calendar'));
const AdminReports = React.lazy(() => import('./pages/portal/admin/Reports'));
const AdminSettings = React.lazy(() => import('./pages/portal/admin/Settings'));
const AdminPayments = React.lazy(() => import('./pages/portal/admin/AdminPayments'));

// Student & Teacher Dashboards
const StudentDashboard = React.lazy(() => import('./pages/portal/student/Dashboard'));
const TeacherDashboard = React.lazy(() => import('./pages/portal/teacher/Dashboard'));
const EduChat = React.lazy(() => import('./pages/portal/EduChat'));

const StudentSchedule = React.lazy(() => import('./pages/portal/student/Schedule'));
const StudentResults = React.lazy(() => import('./pages/portal/student/ExamResults'));
const StudentHomework = React.lazy(() => import('./pages/portal/student/Homework'));
const StudentResources = React.lazy(() => import('./pages/portal/student/Resources'));

const TeacherSchedule = React.lazy(() => import('./pages/portal/teacher/TeacherSchedule'));
const TeacherResults = React.lazy(() => import('./pages/portal/teacher/TeacherResults'));
const TeacherHomework = React.lazy(() => import('./pages/portal/teacher/TeacherHomework'));
const TeacherResources = React.lazy(() => import('./pages/portal/teacher/TeacherResources'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const PortalTransitionOverlay: React.FC<{ isVisible: boolean, isFlipping: boolean }> = ({ isVisible, isFlipping }) => {
  if (!isVisible) return null;
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1642] overflow-hidden transition-all duration-500 ${isFlipping ? 'animate-page-flip' : ''}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
            <Variable className="absolute top-[15%] left-[10%] text-blue-400/40 w-16 h-16 animate-float rotate-12" />
            <Atom className="absolute top-[20%] right-[15%] text-accent/30 w-24 h-24 animate-float-slow" />
            <Shapes className="absolute bottom-[25%] left-[15%] text-blue-300/30 w-12 h-12 animate-float-reverse" />
            <FlaskConical className="absolute bottom-[15%] right-[20%] text-accent/40 w-16 h-16 animate-float-slow" />
        </div>
        <div className={`relative z-10 text-center flex flex-col items-center transition-all duration-500 ${isFlipping ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zBZ5_L5a8zISY0-QhcP6Pf47VO4LZ-pwgA&s" alt="Logo" className="w-24 h-24 rounded-full border-4 border-white/20 animate-logo-pulse" />
            <h2 className="font-heading font-bold text-2xl text-white mt-6 mb-1">Sancak Portal</h2>
            <p className="text-blue-300 text-xs font-medium uppercase tracking-[0.3em] mb-6">Giriş Yapılıyor...</p>
            
            <div className="w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-accent rounded-full animate-progress-load shadow-[0_0_10px_rgba(255,107,53,0.5)]"></div>
            </div>
        </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [transition, setTransition] = useState({ isVisible: false, isFlipping: false });

  const handleLogin = (role: UserRole) => {
    setTransition({ isVisible: true, isFlipping: false });
    const mockUser: User = {
      id: '123',
      name: role === UserRole.ADMIN ? 'Sancak Yönetici' : role === UserRole.TEACHER ? 'Mehmet Hoca' : 'Zeynep Yılmaz',
      email: 'user@sancak.com',
      role: role,
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=100'
    };
    setUser(mockUser);
    setTimeout(() => {
        setTransition(prev => ({ ...prev, isFlipping: true }));
        setTimeout(() => setTransition({ isVisible: false, isFlipping: false }), 1300);
    }, 2200);
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <PortalTransitionOverlay isVisible={transition.isVisible} isFlipping={transition.isFlipping} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout user={user} />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>
          
          {/* CRM / Portal Routes - Completely Separated */}
          <Route path="/crm/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/crm/*" element={user ? <PortalLayout user={user} onLogout={handleLogout} /> : <Navigate to="/crm/login" replace />}>
              <Route path="dashboard" element={
                user?.role === UserRole.ADMIN ? <AdminDashboard /> :
                user?.role === UserRole.TEACHER ? <TeacherDashboard /> :
                <StudentDashboard />
              } />
              
              {/* Admin Specific Routes */}
              {user?.role === UserRole.ADMIN && (
                <>
                  <Route path="students" element={<AdminStudents />} />
                  <Route path="teachers" element={<AdminTeachers />} />
                  <Route path="courses" element={<AdminCourses />} />
                  <Route path="payments" element={<AdminPayments />} />
                  <Route path="calendar" element={<AdminCalendar />} />
                  <Route path="reports" element={<AdminReports />} />
                  <Route path="settings" element={<AdminSettings />} />
                </>
              )}

              {/* Shared Portal Routes */}
              <Route path="chat" element={<EduChat user={user} />} />
              <Route path="schedule" element={user?.role === UserRole.TEACHER ? <TeacherSchedule /> : <StudentSchedule />} />
              <Route path="results" element={user?.role === UserRole.TEACHER ? <TeacherResults /> : <StudentResults />} />
              <Route path="homework" element={user?.role === UserRole.TEACHER ? <TeacherHomework /> : <StudentHomework />} />
              <Route path="resources" element={user?.role === UserRole.TEACHER ? <TeacherResources /> : <StudentResources />} />
              
              {/* Fallback inside CRM */}
              <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Global Fallback to Public Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppContent;
