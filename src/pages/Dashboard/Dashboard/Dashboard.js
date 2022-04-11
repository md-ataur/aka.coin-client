import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './Dasboard.css';

const Dashboard = () => {
    let activeStyle = {
        color: '#18b2cb',
    };

    let activeClassName = 'color';

    return (
        <Container className="dashboard-area py-5">
            <h2>Dashboard</h2>
            <div className="dashboard">
                <div className="dashboard-left">
                    <NavLink
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to="/dashboard/hero/add"
                    >
                        Hero Section
                    </NavLink>
                </div>
                <div className="dashboard-right">
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
