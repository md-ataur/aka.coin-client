import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditHero = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const [hero, setHero] = useState({});
    const [loading, setLoading] = useState(true);

    // Data read from the server
    useEffect(() => {
        fetch(`http://localhost:5000/hero/${id}`)
            .then((res) => res.json())
            .then((data) => setHero(data))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Form Handler
    const onSubmitForm = (e) => {
        fetch(`http://localhost:5000/hero/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(hero),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setSuccessMessage('Successfully Updated');
                    setHero({});
                }
            });

        e.preventDefault();
    };

    const handleFieldData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...hero };
        newData[name] = value;
        setHero(newData);
    };

    return (
        <div className="dashboard-form">
            {loading && <h5>Loading...</h5>}

            {!loading && (
                <>
                    <div>
                        <h4>Update</h4>
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    </div>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="title"
                                value={hero.title || ''}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subtitle</Form.Label>
                            <textarea
                                onChange={handleFieldData}
                                name="subtitle"
                                value={hero.subtitle || ''}
                                cols="30"
                                rows="3"
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="image"
                                value={hero.image || ''}
                                type="text"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </>
            )}
        </div>
    );
};

export default EditHero;
