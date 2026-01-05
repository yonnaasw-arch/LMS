"use client";

import { useState } from "react";

const STEPS = ["Details", "Address", "Finance", "Collaterals", "Terms"];

export default function LoanApplication() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    return (
        <div className="application-container">
            <header className="application-header">
                <h1>Apply for a loan</h1>
                <div className="stepper">
                    {STEPS.map((step, index) => (
                        <div key={step} className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}>
                            <div className="step-circle">{index + 1}</div>
                            <span className="step-label">{step}</span>
                            {index < STEPS.length - 1 && <div className="step-line" />}
                        </div>
                    ))}
                </div>
            </header>

            <div className="card application-card">
                {currentStep === 0 && (
                    <div className="step-content">
                        <h2>Your details</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Title</label>
                                <select>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>Ms</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" placeholder="First name" defaultValue="TEST" />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" placeholder="Last name" defaultValue="TEST" />
                            </div>
                            <div className="form-group large">
                                <label>Email Address</label>
                                <input type="email" placeholder="Email Address" defaultValue="test@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <div className="phone-input">
                                    <select className="country-code">
                                        <option>+251</option>
                                        <option>+1</option>
                                    </select>
                                    <input type="tel" placeholder="Phone number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Date of birth</label>
                                <div className="date-input">
                                    <input type="number" placeholder="DD" style={{ width: '60px' }} />
                                    <select><option>Month</option></select>
                                    <input type="number" placeholder="YYYY" style={{ width: '80px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep > 0 && (
                    <div className="step-content placeholder-content">
                        <h2>{STEPS[currentStep]}</h2>
                        <p>This is a demo content for the {STEPS[currentStep]} step. In the full version, specific fields for {STEPS[currentStep].toLowerCase()} would be here.</p>
                    </div>
                )}

                <div className="form-actions">
                    <button className="btn-secondary" onClick={prevStep} disabled={currentStep === 0}>
                        ← Previous step
                    </button>
                    <button className="btn-primary" onClick={nextStep}>
                        {currentStep === STEPS.length - 1 ? 'Submit Application' : 'Continue'}
                    </button>
                </div>
            </div>

            <style jsx global>{`
        .application-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stepper {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          padding: 0 1rem;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          flex: 1;
        }

        .step-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          z-index: 2;
          transition: all 0.3s;
        }

        .step.active .step-circle {
          border-color: var(--primary);
          color: var(--primary);
        }

        .step.completed .step-circle {
          background-color: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .step-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05rem;
        }

        .step.active .step-label {
          color: var(--primary);
        }

        .step-line {
          position: absolute;
          top: 15px;
          left: 50%;
          width: 100%;
          height: 2px;
          background-color: var(--border);
          z-index: 1;
        }

        .step.completed .step-line {
          background-color: var(--primary);
        }

        .application-card {
          padding: 2.5rem;
        }

        .step-content h2 {
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group.large {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .phone-input, .date-input {
          display: flex;
          gap: 0.75rem;
        }

        .country-code {
          width: 100px;
        }

        .form-actions {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
        }

        .placeholder-content {
          text-align: center;
          padding: 3rem 0;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.large {
            grid-column: span 1;
          }
          .step-label {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
