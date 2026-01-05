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
              <span className="logo-text">LMS</span>
              <span className="logo-subtext">Portal</span>
            </a>
            <nav className="sidebar-nav">
              <div className="nav-section">BORROWER</div>
              <a href="/borrower" className="nav-item">Dashboard</a>
              <a href="/borrower/apply" className="nav-item">Apply for Loan</a>
              <a href="/borrower/payments" className="nav-item">My Payments</a>

              <div className="nav-section">ADMIN</div>
              <a href="/admin" className="nav-item">Overview</a>
              <a href="/admin/applications" className="nav-item">Applications</a>
              <a href="/admin/parties" className="nav-item">Parties</a>

              <div style={{ marginTop: 'auto', padding: '1rem 0' }}>
                <a href="/login" className="nav-item" style={{ opacity: 0.7 }}>Switch Role</a>
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
