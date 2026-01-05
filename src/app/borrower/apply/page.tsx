"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoanApplication() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0: Selection, 1: Personal, 2: Address, 3: Income, 4: Summary
  const [product, setProduct] = useState<string | null>(null);

  const steps = ["Selection", "Personal", "Address", "Income", "Collateral", "Summary"];

  const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  const selectProduct = (p: string) => {
    setProduct(p);
    setStep(1);
  };

  return (
    <div className="application-container">
      <header className="page-header">
        <h1>{step === 0 ? "Apply for a loan" : `New ${product} Loan Application`}</h1>
        <div className="breadcrumb">Borrower » {steps[step]}</div>
      </header>

      {/* Stepper - Visible after step 0 */}
      {step > 0 && (
        <div className="card stepper-card">
          <div className="stepper">
            {steps.slice(1).map((s, i) => (
              <div key={i} className={`step-item ${step === i + 1 ? 'active' : step > i + 1 ? 'completed' : ''}`}>
                <div className="step-number">{step > i + 1 ? '✓' : i + 1}</div>
                <div className="step-label">{s}</div>
                {i < steps.length - 2 && <div className="step-line"></div>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="main-form-area" style={{ marginTop: '1.5rem' }}>
        {step === 0 && (
          <div className="product-selection-grid">
            <div className={`product-choice-card ${product === 'Mortgage' ? 'selected' : ''}`} onClick={() => selectProduct('Mortgage')}>
              <div className="choice-icon">🏠</div>
              <div className="choice-content">
                <h3>Mortgage</h3>
                <p>Long-term secured lending for real estate acquisition.</p>
              </div>
            </div>
            <div className={`product-choice-card ${product === 'Personal Loan' ? 'selected' : ''}`} onClick={() => selectProduct('Personal Loan')}>
              <div className="choice-icon">👤</div>
              <div className="choice-content">
                <h3>Personal loan</h3>
                <p>Unsecured credit for individuals based on credit profile.</p>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="card form-step-card">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Title</label>
                <select><option>Mr.</option><option>Mrs.</option></select>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="form-group">
                <label>Birth Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+251 ..." />
              </div>
            </div>
          </div>
        )}

        {step > 0 && (
          <div className="form-actions" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            {step > 1 && <button onClick={prevStep} className="btn-secondary">Back</button>}
            <button onClick={nextStep} className="btn-primary">
              {step === steps.length - 1 ? "Submit Application" : "Continue"}
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        .stepper-card { padding: 1rem 2rem; margin-bottom: 2rem; }
        .stepper { display: flex; align-items: center; justify-content: space-between; }
        .step-item { display: flex; align-items: center; gap: 0.75rem; position: relative; flex: 1; }
        .step-number { 
          width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--border);
          display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;
          background: white; color: var(--text-muted);
        }
        .step-label { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
        .step-line { flex: 1; height: 2px; background: var(--border); margin: 0 1rem; }

        .step-item.active .step-number { border-color: var(--accent); color: var(--accent); }
        .step-item.active .step-label { color: var(--accent); }
        .step-item.completed .step-number { background: var(--success); border-color: var(--success); color: white; }
        .step-item.completed .step-label { color: var(--text-main); }
        .step-item.completed .step-line { background: var(--success); }

        .product-selection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .product-choice-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .product-choice-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .product-choice-card.selected {
          border-color: var(--accent);
          background: var(--bg-main);
        }

        .choice-icon { font-size: 3rem; }
        .choice-content h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .choice-content p { color: var(--text-muted); font-size: 0.95rem; }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
