"use client";

export default function PartyManagement() {
    const parties = [
        { id: 'PID-001', name: 'John Doe', role: 'Borrower', status: 'Active', exposure: '$4,250.00' },
        { id: 'PID-002', name: 'Sarah Smith', role: 'Guarantor', status: 'Verified', exposure: '$0.00' },
        { id: 'PID-003', name: 'InvestCorp Alpha', role: 'Investor', status: 'Active', exposure: '$250,000.00' },
        { id: 'PID-004', name: 'Mercy Kapoo', role: 'Borrower', status: 'Delinquent', exposure: '$1,200.00' },
    ];

    return (
        <div className="parties-container">
            <header className="page-header">
                <div className="flex justify-between items-center">
                    <div>
                        <h1>Party Management</h1>
                        <p>Unified registry of borrowers, guarantors, and capital providers.</p>
                    </div>
                    <button className="btn-primary">Add New Party</button>
                </div>
            </header>

            <div className="card filter-card flex gap-4">
                <input type="text" placeholder="Search by name, ID or role..." style={{ flex: 1 }} />
                <select style={{ width: '200px' }}>
                    <option>All Roles</option>
                    <option>Borrowers</option>
                    <option>Guarantors</option>
                    <option>Investors</option>
                </select>
                <select style={{ width: '200px' }}>
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Delinquent</option>
                    <option>Pending</option>
                </select>
            </div>

            <section className="dashboard-section">
                <div className="card table-card">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Party ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Financial Exposure</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parties.map(party => (
                                <tr key={party.id}>
                                    <td><span className="bold">{party.id}</span></td>
                                    <td>{party.name}</td>
                                    <td>
                                        <span className={`badge ${party.role === 'Borrower' ? 'info' :
                                                party.role === 'Investor' ? 'success' : 'warning'
                                            }`}>
                                            {party.role}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge ${party.status === 'Active' || party.status === 'Verified' ? 'success' : 'error'
                                            }`}>
                                            {party.status}
                                        </span>
                                    </td>
                                    <td><span className="bold">{party.exposure}</span></td>
                                    <td>
                                        <a href="#" className="view-all" style={{ fontSize: '0.8rem' }}>View Profile</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <style jsx global>{`
                .parties-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .filter-card {
                    padding: 1.5rem;
                    background: white;
                }

                @media (max-width: 800px) {
                    .filter-card {
                        flex-direction: column;
                    }
                    .filter-card select {
                        width: 100% !important;
                    }
                }
            `}</style>
        </div>
    );
}
