import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MakeHero = () => {
    const { register, handleSubmit, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [heros, setHeros] = useState([]);

    // Data send to the server
    const onSubmit = (data) => {
        fetch('https://infinite-depths-07881.herokuapp.com/hero', {
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
        fetch('https://infinite-depths-07881.herokuapp.com/hero')
            .then((res) => res.json())
            .then((data) => setHeros(data))
            .finally(() => {
                setLoading(false);
            });
    }, [heros]);

    // Data delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            const url = `https://infinite-depths-07881.herokuapp.com/hero/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully ');
                        const remainingData = heros.filter((hero) => hero._id !== id);
                        setHeros(remainingData);
                    }
                });
        }
    };

    return (
        <Row>
            <Col xs={12} md={6} lg={5}>
                <div className="dashboard-form">
                    <h4>Add Hero</h4>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control {...register('title', { required: true })} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subtitle</Form.Label>
                            <textarea
                                {...register('subtitle', {})}
                                cols="30"
                                rows="3"
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control {...register('image', { required: true })} type="text" />
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
                        {heros.map((hero) => (
                            <div key={hero._id} className="mb-4">
                                <h5 className="mb-3">{hero.title}</h5>
                                <p>{hero.subtitle}</p>
                                <img src={hero.image} width="130" height="130" alt="" />
                                <div className="button-area mt-3">
                                    <Link to={`/dashboard/hero/edit/${hero._id}`}>
                                        <Button
                                            style={{ marginRight: '8px' }}
                                            variant="primary"
                                            type="submit"
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button
                                        onClick={() => handleDelete(hero._id)}
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

export default MakeHero;
