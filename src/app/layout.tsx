import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LMS | Loan Management System",
  description: "Enterprise-grade digital lending platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          <aside className="sidebar">
            <a href="/" className="sidebar-logo">
              <span className="logo-text">lendfusion</span>
              <span className="logo-subtext">Loan Management System</span>
            </a>
            <nav className="sidebar-nav">
              <a href="/admin" className="nav-item active">
                <span className="nav-icon">📊</span> Dashboard
              </a>
              <a href="/admin/applications" className="nav-item">
                <span className="nav-icon">📝</span> Applications <span className="chevron">›</span>
              </a>
              <a href="/admin/loans" className="nav-item">
                <span className="nav-icon">🏦</span> Loans <span className="chevron">›</span>
              </a>
              <a href="/admin/transactions" className="nav-item">
                <span className="nav-icon">💳</span> Transactions <span className="chevron">›</span>
              </a>
              <a href="/admin/parties" className="nav-item">
                <span className="nav-icon">👥</span> Parties <span className="chevron">›</span>
              </a>
              <a href="/admin/collaterals" className="nav-item">
                <span className="nav-icon">🏠</span> Collaterals
              </a>
              <a href="/admin/reports" className="nav-item">
                <span className="nav-icon">📈</span> Reports <span className="chevron">›</span>
              </a>
              <a href="/admin/tasks" className="nav-item">
                <span className="nav-icon">✅</span> Tasks
              </a>

              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a href="/admin/settings" className="nav-item">
                  <span className="nav-icon">⚙️</span> Settings
                </a>
              </div>
            </nav>
          </aside>

          <div className="main-container">
            <header className="main-header">
              <div className="header-search">
                <input type="text" placeholder="Search application ID, name..." />
              </div>
              <div className="header-profile">
                <div className="avatar">JD</div>
                <span>John Doe</span>
              </div>
            </header>

            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
