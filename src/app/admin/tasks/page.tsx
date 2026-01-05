"use client";

import React from 'react';

export default function TasksPlaceholder() {
    const tasks = [
        { id: 'TSK-882', title: 'Verify John Doe Address', deadline: 'Today', priority: 'High' },
        { id: 'TSK-883', title: 'Call Sarah Smith (Follow-up)', deadline: 'Tomorrow', priority: 'Normal' },
    ];

    return (
        <div className="placeholder-page">
            <header className="page-header">
                <h1>Tasks</h1>
                <div className="breadcrumb">Admin » Tasks</div>
            </header>

            <section className="card table-card" style={{ marginTop: '1.5rem' }}>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task Title</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(t => (
                            <tr key={t.id}>
                                <td><span className="bold">{t.id}</span></td>
                                <td>{t.title}</td>
                                <td>{t.deadline}</td>
                                <td><span className={`badge ${t.priority === 'High' ? 'error' : 'info'}`}>{t.priority}</span></td>
                                <td><button className="view-link">Execute</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
