"use client";

import React from 'react';

export default function TransactionsPlaceholder() {
    const txs = [
        { id: 'TX-1001', loan: '#L260102001', party: 'John Doe', amount: '€320.00', type: 'Repayment', status: 'Settled' },
        { id: 'TX-1002', loan: '#L251215042', party: 'Sarah Smith', amount: '€1,200.00', type: 'Disbursement', status: 'Pending' },
    ];

    return (
        <div className="placeholder-page">
            <header className="page-header">
                <h1>Transactions</h1>
                <div className="breadcrumb">Admin » Transactions</div>
            </header>

            <section className="card table-card" style={{ marginTop: '1.5rem' }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>TX ID</th>
                            <th>Loan ID</th>
                            <th>Party</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {txs.map(tx => (
                            <tr key={tx.id}>
                                <td><span className="bold">{tx.id}</span></td>
                                <td>{tx.loan}</td>
                                <td>{tx.party}</td>
                                <td><span className="bold">{tx.amount}</span></td>
                                <td>{tx.type}</td>
                                <td><span className={`badge ${tx.status === 'Settled' ? 'success' : 'warning'}`}>{tx.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
