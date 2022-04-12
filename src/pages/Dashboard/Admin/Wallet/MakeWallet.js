import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MakeWallet = () => {
    const { register, handleSubmit, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [wallets, setWallets] = useState([]);

    // Data send to the server
    const onSubmit = (data) => {
        fetch('https://infinite-depths-07881.herokuapp.com/wallet', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccessMessage('Successfully Added');
                    reset();
                }
            });
    };

    // Data read from the server
    useEffect(() => {
        fetch('https://infinite-depths-07881.herokuapp.com/wallet')
            .then((res) => res.json())
            .then((data) => setWallets(data))
            .finally(() => {
                setLoading(false);
            });
    }, [wallets]);

    // Data delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            const url = `https://infinite-depths-07881.herokuapp.com/wallet/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully ');
                        const remainingData = wallets.filter((wallet) => wallet._id !== id);
                        setWallets(remainingData);
                    }
                });
        }
    };

    return (
        <Row>
            <Col xs={12} md={6} lg={5}>
                <div className="dashboard-form">
                    <h4>Add Wallet</h4>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title Image Icon</Form.Label>
                            <Form.Control
                                {...register('imageIcon', { required: true })}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control {...register('title', { required: true })} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <textarea
                                {...register('description', {})}
                                cols="30"
                                rows="3"
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Background Image Url</Form.Label>
                            <Form.Control
                                {...register('bgImage', { required: true })}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Color Code</Form.Label>
                            <Form.Control {...register('color', { required: true })} type="text" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
            <Col xs={12} md={6} lg={7}>
                {loading && <h5>Loading...</h5>}

                {!loading && (
                    <div className="py-4">
                        {wallets.map((wallet) => (
                            <div key={wallet._id} className="mb-4">
                                <h5 className="mb-3">{wallet.title}</h5>
                                <p>{wallet.description}</p>
                                <p>
                                    <img src={wallet.bgImage} width="130" height="130" alt="" />
                                </p>
                                <p>Color: {wallet.color}</p>
                                <div className="button-area mt-3">
                                    <Link to={`/dashboard/wallet/edit/${wallet._id}`}>
                                        <Button
                                            style={{ marginRight: '8px' }}
                                            variant="primary"
                                            type="submit"
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button
                                        onClick={() => handleDelete(wallet._id)}
                                        variant="danger"
                                        type="submit"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Col>
        </Row>
    );
};

export default MakeWallet;
