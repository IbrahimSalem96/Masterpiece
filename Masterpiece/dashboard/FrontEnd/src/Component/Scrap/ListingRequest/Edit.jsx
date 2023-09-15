import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit({ editId, adminInfo, fetchData }) {
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
        try {
            if (fields.phone && !validatePhoneNumber(fields.phone)) {
                setErrorMessages({ phone: 'Phone number must be between 10 and 14 digits' });
                return;
            }

            if (fields.date) {
                const selectedDate = new Date(fields.date);
                const currentDate = new Date();
                if (selectedDate < currentDate) {
                    setErrorMessages((prevErrors) => ({
                        ...prevErrors,
                        date: 'An earlier date cannot be selected',
                    }));
                    return;
                }
            }

            const response = await axios.put(`http://localhost:9000/api/scrap/next-auction/${editId}`, fields, {
                headers: {
                    Authorization: "Bearer " + adminInfo.token,
                    "Content-Type": "multipart/form-data",
                },
            });

            setFields({
                username: '',
                startingPrice: '',
                phone: '',
                date: '',
                time: '',
                image: '',
                details: '',
            });

            setErrorMessages({});
            fetchData();

            toast.success('Modified successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored",
            });

        } catch (error) {
            toast.error('Error fetching data', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
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
        <div className="modal fade" id="edit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Service Providers</h1>
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
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputDetails" className="form-label">Details</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDetails"
                                    aria-describedby="DetailsHelp"
                                    onChange={(e) => handleFieldChange('details', e.target.files[0])}
                                />
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
        </div >
    );
}

export default Edit;
