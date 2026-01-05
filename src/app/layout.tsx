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
            <div className="sidebar-logo">
              <span className="logo-text">LMS</span>
              <span className="logo-subtext">Portal</span>
            </div>
            <nav className="sidebar-nav">
              <div className="nav-section">BORROWER</div>
              <a href="#" className="nav-item active">Dashboard</a>
              <a href="#" className="nav-item">Apply for Loan</a>
              <a href="#" className="nav-item">My Payments</a>

              <div className="nav-section">ADMIN</div>
              <a href="#" className="nav-item">Overview</a>
              <a href="#" className="nav-item">Applications</a>
              <a href="#" className="nav-item">Parties</a>
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
