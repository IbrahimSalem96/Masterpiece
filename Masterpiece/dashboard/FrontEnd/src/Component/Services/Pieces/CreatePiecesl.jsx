import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreatePiecesl({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        phone: '',
        type: '',
        details: '',
        image: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        phone: '',
        type: '',
        details: '',
        image: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleCreate = async () => {
        const newErrorMessages = {};

        const requiredFields = ['phone', 'type', 'details', 'image'];

        requiredFields.forEach(field => {
            if (!fields[field]) {
                newErrorMessages[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()} is required`;
            }
        });

        if (fields.phone && !validatePhoneNumber(fields.phone)) {
            newErrorMessages.phone = 'Phone number must be between 10 and 14 digits';
        }

        setErrorMessages(newErrorMessages);

        if (Object.keys(newErrorMessages).length > 0) {
            return;
        }

        try {
            const response = await axios.post(`http://localhost:9000/api/services/location-pieces/`, fields, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                    "Content-Type": "multipart/form-data",
                },
            });

            setFields({
                phone: '',
                type: '',
                details: '',
                image: '',
            });

            fetchData();

            toast.success('Added successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            toast.error('Error fetching data', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };

    const handleFieldChange = (fieldName, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: value,
        }));

        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '',
        }));
    };

    return (
        <div className="modal fade" id="create" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Location Pieces</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={fields.phone}
                                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                                />
                                {errorMessages.phone && <div className="text-danger">{errorMessages.phone}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Type</label>
                                <select
                                    className="form-select"
                                    id="type"
                                    value={fields.type}
                                    onChange={(e) => handleFieldChange('type', e.target.value)}
                                >
                                    <option value="">Select a type</option>
                                    <option value="Cars">Cars</option>
                                    <option value="Motorcycles">Motorcycles</option>
                                    <option value="Buses">Buses</option>
                                    <option value="Trucks">Trucks</option>
                                    <option value="Machines">Machines</option>
                                </select>
                                {errorMessages.type && <div className="text-danger">{errorMessages.type}</div>}
                            </div>


                            <div className="mb-3">
                                <label htmlFor="details" className="form-label">Details</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="details"
                                    value={fields.details}
                                    onChange={(e) => handleFieldChange('details', e.target.value)}
                                />
                                {errorMessages.details && <div className="text-danger">{errorMessages.details}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputImage" className="form-label">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleInputImage"
                                    aria-describedby="ImageHelp"
                                    onChange={(e) => handleFieldChange('image', e.target.files[0])}
                                />
                                {errorMessages.image && <div className="text-danger">{errorMessages.image}</div>}
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss='modal'
                            onClick={handleCreate}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePiecesl;
