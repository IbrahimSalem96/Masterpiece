import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateAccidents({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        phone: '',
        vehicleCompany: '',
        modelVehicle: '',
        fuelType: '',
        location: '',
        details: '',
        type: '',
        requist: '',
        date: '',
        time: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        phone: '',
        vehicleCompany: '',
        modelVehicle: '',
        fuelType: '',
        location: '',
        details: '',
        type: '',
        requist: '',
        date: '',
        time: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleCreate = async () => {
        const newErrorMessages = {};

        const requiredFields = ['phone', 'vehicleCompany', 'modelVehicle', 'fuelType', 'location', 'details', 'type', 'requist', 'date', 'time'];

        requiredFields.forEach(field => {
            if (!fields[field]) {
                newErrorMessages[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
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
            const response = await axios.post(`http://localhost:9000/api/services/maintenance-request/`, fields, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });

            setFields({
                phone: '',
                vehicleCompany: '',
                modelVehicle: '',
                fuelType: '',
                location: '',
                details: '',
                type: '',
                requist: '',
                date: '',
                time: '',
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Accidents</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>

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
                                <label htmlFor="exampleInputvehicleCompany" className="form-label">Vehicle Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputvehicleCompany"
                                    aria-describedby="vehicleCompanyHelp"
                                    value={fields.vehicleCompany}
                                    onChange={(e) => handleFieldChange('vehicleCompany', e.target.value)}
                                />
                                {errorMessages.vehicleCompany && <div className="text-danger">{errorMessages.vehicleCompany}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputmodelVehicle" className="form-label">Model Vehicle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputmodelVehicle"
                                    aria-describedby="modelVehicleHelp"
                                    value={fields.modelVehicle}
                                    onChange={(e) => handleFieldChange('modelVehicle', e.target.value)}
                                />
                                {errorMessages.modelVehicle && <div className="text-danger">{errorMessages.modelVehicle}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputType" className="form-label">Type</label>
                                <select
                                    className="form-select"
                                    id="exampleInputType"
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
                                <label htmlFor="exampleInputRequist" className="form-label">Request</label>
                                <select
                                    className="form-select"
                                    id="exampleInputRequist"
                                    value={fields.requist}
                                    onChange={(e) => handleFieldChange('requist', e.target.value)}
                                >
                                    <option value="">Select a request</option>
                                    <option value="Flat Tire">Flat Tire</option>
                                    <option value="Engine Heat">Engine Heat</option>
                                    <option value="Battery Jump">Battery Jump</option>
                                    <option value="Key lock">Key lock</option>
                                    <option value="Other service">Other service</option>
                                </select>
                                {errorMessages.requist && <div className="text-danger">{errorMessages.requist}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputFuelType" className="form-label">Fuel Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputFuelType"
                                    aria-describedby="fuelTypeHelp"
                                    value={fields.fuelType}
                                    onChange={(e) => handleFieldChange('fuelType', e.target.value)}
                                />
                                {errorMessages.fuelType && <div className="text-danger">{errorMessages.fuelType}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputLocation"
                                    aria-describedby="locationHelp"
                                    value={fields.location}
                                    onChange={(e) => handleFieldChange('location', e.target.value)}
                                />
                                {errorMessages.location && <div className="text-danger">{errorMessages.location}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputDetails" className="form-label">Details</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDetails"
                                    aria-describedby="detailsHelp"
                                    value={fields.details}
                                    onChange={(e) => handleFieldChange('details', e.target.value)}
                                />
                                {errorMessages.details && <div className="text-danger">{errorMessages.details}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputDate" className="form-label">Date</label>
                                <input
                                    type='date'
                                    className="form-control"
                                    id="exampleInputDate"
                                    value={fields.date}
                                    onChange={(e) => handleFieldChange('date', e.target.value)}
                                />
                                {errorMessages.date && <div className="text-danger">{errorMessages.date}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputTime" className="form-label">Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="exampleInputTime"
                                    value={fields.time}
                                    onChange={(e) => handleFieldChange('time', e.target.value)}
                                />
                                {errorMessages.time && <div className="text-danger">{errorMessages.time}</div>}
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
