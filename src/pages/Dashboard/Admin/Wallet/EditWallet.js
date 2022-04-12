import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditWallet = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const [wallet, setWallet] = useState({});
    const [loading, setLoading] = useState(true);

    // Data read from the server
    useEffect(() => {
        fetch(`https://infinite-depths-07881.herokuapp.com/wallet/${id}`)
            .then((res) => res.json())
            .then((data) => setWallet(data))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Form Handler
    const onSubmitForm = (e) => {
        fetch(`https://infinite-depths-07881.herokuapp.com/wallet/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(wallet),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setSuccessMessage('Successfully Updated');
                    setWallet({});
                }
            });

        e.preventDefault();
    };

    const handleFieldData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...wallet };
        newData[name] = value;
        setWallet(newData);
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
                            <Form.Label>Title Image Icon</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="imageIcon"
                                value={wallet.imageIcon || ''}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="title"
                                value={wallet.title || ''}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <textarea
                                onChange={handleFieldData}
                                name="description"
                                value={wallet.description || ''}
                                cols="30"
                                rows="3"
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Background Image Url</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="bgImage"
                                value={wallet.bgImage || ''}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Color Code</Form.Label>
                            <Form.Control
                                onChange={handleFieldData}
                                name="color"
                                value={wallet.color || ''}
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

export default EditWallet;
