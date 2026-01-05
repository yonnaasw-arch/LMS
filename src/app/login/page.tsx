"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleLogin = (role: string) => {
    setLoading(role);
    // Simulate navigation delay for premium feel
    setTimeout(() => {
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/');
      }
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-box">LMS</div>
          <h1>System Access</h1>
          <p>Select your role to access the portal demo.</p>
        </div>

        <div className="role-grid">
          <button
            className={`role-card ${loading === 'borrower' ? 'loading' : ''}`}
            onClick={() => handleLogin('borrower')}
          >
            <div className="role-icon">👤</div>
            <div className="role-info">
              <h3>Borrower</h3>
              <p>Apply for loans and manage repayments.</p>
            </div>
            {loading === 'borrower' && <div className="loader"></div>}
          </button>

          <button
            className={`role-card ${loading === 'admin' ? 'loading' : ''}`}
            onClick={() => handleLogin('admin')}
          >
            <div className="role-icon">🛡️</div>
            <div className="role-info">
              <h3>Admin</h3>
              <p>Underwrite loans and monitor portfolio.</p>
            </div>
            {loading === 'admin' && <div className="loader"></div>}
          </button>

          <button
            className={`role-card ${loading === 'investor' ? 'loading' : ''}`}
            onClick={() => handleLogin('investor')}
          >
            <div className="role-icon">💰</div>
            <div className="role-info">
              <h3>Investor</h3>
              <p>Monitor capital deployment and returns.</p>
            </div>
            {loading === 'investor' && <div className="loader"></div>}
          </button>
        </div>

        <div className="login-footer">
          <p>Demo Mode Active. No password required.</p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0047AB 0%, #002D6B 100%);
          padding: 2rem;
        }

        .login-card {
          background: white;
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .logo-box {
          background: var(--primary);
          color: white;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          border-radius: 12px;
          margin: 0 auto 1.5rem;
        }

        .login-header h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .role-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .role-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: left;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: white;
        }

        .role-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
        }

        .role-icon {
          font-size: 2rem;
          background: var(--bg-main);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .role-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .role-info p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .login-footer {
          margin-top: 2.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .role-card.loading {
          opacity: 0.7;
          pointer-events: none;
        }

        .loader {
          position: absolute;
          right: 1.5rem;
          width: 20px;
          height: 20px;
          border: 2px solid var(--primary-light);
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
