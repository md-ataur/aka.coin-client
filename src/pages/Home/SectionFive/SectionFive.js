import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SectionFive.css';

const SectionFive = () => {
    return (
        <div className="section-five counter-area">
            <Container>
                <Row xs={1} md={4} lg={4}>
                    <Col>
                        <p>Transactions/Second</p>
                        <h3>$2,945</h3>
                    </Col>
                    <Col>
                        <p>Total Transactions</p>
                        <h3>$5,685</h3>
                    </Col>
                    <Col>
                        <p>Avg. Cost/Transaction</p>
                        <h3>$1,465</h3>
                    </Col>
                    <Col>
                        <p>Validator Nodes</p>
                        <h3>3,498</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionFive;
