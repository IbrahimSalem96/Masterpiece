import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateServiceProviders({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        scrapName: '',
        startingPrice: '',
        phone: '',
        date: '',
        time: '',
        image: '',
        details: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        scrapName: '',
        startingPrice: '',
        phone: '',
        date: '',
        time: '',
        image: '',
        details: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleEdit = async () => {
        const newErrorMessages = {};

        if (!fields.scrapName) {
            newErrorMessages.scrapName = 'Scrap Name is required';
        }

        if (!fields.startingPrice) {
            newErrorMessages.startingPrice = 'Starting Price is required';
        }

        if (!fields.phone) {
            newErrorMessages.phone = 'Phone is required';
        } else if (!validatePhoneNumber(fields.phone)) {
            newErrorMessages.phone = 'Phone number must be between 10 and 14 digits';
        }

        if (!fields.date) {
            newErrorMessages.date = 'Date is required';
        }

        if (!fields.time) {
            newErrorMessages.time = 'Time is required';
        }

        if (!fields.image) {
            newErrorMessages.image = 'Image is required';
        }

        if (!fields.details) {
            newErrorMessages.details = 'Details is required';
        }

        if (Object.keys(newErrorMessages).length > 0) {
            setErrorMessages(newErrorMessages);
            return;
        }

        const formData = new FormData();
        formData.append('scrapName', fields.scrapName);
        formData.append('startingPrice', fields.startingPrice);
        formData.append('phone', fields.phone);
        formData.append('date', fields.date);
        formData.append('time', fields.time);
        formData.append('image', fields.image);
        formData.append('details', fields.details);

        try {
            const response = await axios.post(`http://localhost:9000/api/scrap/next-auction/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setFields({
                scrapName: ' ',
                startingPrice: ' ',
                phone: ' ',
                date: ' ',
                time: ' ',
                image: ' ',
                details: ' ',
            });

            setErrorMessages({});
            fetchData();

            toast.success('Modified successfully', {
            });
        } catch (error) {
            toast.error('Error fetching data', {
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Service Providers</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername" className="form-label">Scrap Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername"
                                    aria-describedby="usernameHelp"
                                    value={fields.scrapName}
                                    onChange={(e) => handleFieldChange('scrapName', e.target.value)}
                                />
                                {errorMessages.image && <div className="text-danger">{errorMessages.scrapName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputBio" className="form-label">Starting Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputBio"
                                    aria-describedby="BioHelp"
                                    value={fields.bio}
                                    onChange={(e) => handleFieldChange('startingPrice', e.target.value)}
                                />
                                {errorMessages.image && <div className="text-danger">{errorMessages.startingPrice}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    aria-describedby="PhoneHelp"
                                    value={fields.phone}
                                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                                {errorMessages.phone && <div className="text-danger">{errorMessages.phone}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPrice" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="exampleInputDate"
                                    aria-describedby="DateHelp"
                                    value={fields.date}
                                    onChange={(e) => handleFieldChange('date', e.target.value)}
                                />
                                {errorMessages.date && <div className="text-danger">{errorMessages.date}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPrice" className="form-label">Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputTime"
                                    aria-describedby="TimeHelp"
                                    value={fields.time}
                                    onChange={(e) => handleFieldChange('time', e.target.value)}
                                />
                                {errorMessages.image && <div className="text-danger">{errorMessages.time}</div>}
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

                            <div className="mb-3">
                                <label htmlFor="exampleInputDetails" className="form-label">Details</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDetails"
                                    aria-describedby="DetailsHelp"
                                    onChange={(e) => handleFieldChange('details', e.target.value)}
                                />
                                {errorMessages.image && <div className="text-danger">{errorMessages.details}</div>}
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss={Object.keys(errorMessages).length === 0 ? 'modal' : ''}
                            onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateServiceProviders;
