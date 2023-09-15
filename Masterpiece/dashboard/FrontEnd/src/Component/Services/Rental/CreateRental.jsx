import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateAccidents({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        phone: '',
        vehicleCompany: '',
        nameVehicle: '',
        image: '',
        fuelType: '',
        location: '',
        kilometres: '',
        priceOneDay: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        phone: '',
        vehicleCompany: '',
        nameVehicle: '',
        image: '',
        fuelType: '',
        location: '',
        kilometres: '',
        priceOneDay: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleCreate = async () => {
        const newErrorMessages = {};

        const requiredFields = ['phone', 'vehicleCompany', 'nameVehicle', 'image', 'fuelType', 'location', 'kilometres', 'priceOneDay'];

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
            const response = await axios.post(`http://localhost:9000/api/services/rental`, fields, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                    "Content-Type": "multipart/form-data",
                },
            });

            setFields({
                phone: '',
                vehicleCompany: '',
                nameVehicle: '',
                image: '',
                fuelType: '',
                location: '',
                kilometres: '',
                priceOneDay: '',
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
            console.log(error)
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Rental</h1>
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
                                <label htmlFor="vehicleCompany" className="form-label">Vehicle Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vehicleCompany"
                                    value={fields.vehicleCompany}
                                    onChange={(e) => handleFieldChange('vehicleCompany', e.target.value)}
                                />
                                {errorMessages.vehicleCompany && <div className="text-danger">{errorMessages.vehicleCompany}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nameVehicle" className="form-label">Name Vehicle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameVehicle"
                                    value={fields.nameVehicle}
                                    onChange={(e) => handleFieldChange('nameVehicle', e.target.value)}
                                />
                                {errorMessages.nameVehicle && <div className="text-danger">{errorMessages.nameVehicle}</div>}
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
                                <label htmlFor="fuelType" className="form-label">Fuel Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fuelType"
                                    value={fields.fuelType}
                                    onChange={(e) => handleFieldChange('fuelType', e.target.value)}
                                />
                                {errorMessages.fuelType && <div className="text-danger">{errorMessages.fuelType}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    value={fields.location}
                                    onChange={(e) => handleFieldChange('location', e.target.value)}
                                />
                                {errorMessages.location && <div className="text-danger">{errorMessages.location}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="kilometres" className="form-label">Kilometres</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="kilometres"
                                    value={fields.kilometres}
                                    onChange={(e) => handleFieldChange('kilometres', e.target.value)}
                                />
                                {errorMessages.kilometres && <div className="text-danger">{errorMessages.kilometres}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="priceOneDay" className="form-label">Price per Day</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="priceOneDay"
                                    value={fields.priceOneDay}
                                    onChange={(e) => handleFieldChange('priceOneDay', e.target.value)}
                                />
                                {errorMessages.priceOneDay && <div className="text-danger">{errorMessages.priceOneDay}</div>}
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

export default CreateAccidents;
