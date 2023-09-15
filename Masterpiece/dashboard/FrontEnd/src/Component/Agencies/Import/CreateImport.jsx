import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateCreateImport({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        phone: '',
        vehicleCompany: '',
        modelVehicle: '',
        nameSpareAndNumber: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        phone: '',
        vehicleCompany: '',
        modelVehicle: '',
        nameSpareAndNumber: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleEdit = async () => {
        const newErrorMessages = {};

        if (!fields.vehicleCompany) {
            newErrorMessages.vehicleCompany = 'Vehicle Company is required';
        }

        if (!fields.modelVehicle) {
            newErrorMessages.modelVehicle = 'Model Vehicle is required';
        }

        if (!fields.nameSpareAndNumber) {
            newErrorMessages.nameSpareAndNumber = 'Name Spare And Number is required';
        }

        if (!fields.phone) {
            newErrorMessages.phone = 'Phone is required';
        } else if (!validatePhoneNumber(fields.phone)) {
            newErrorMessages.phone = 'Phone number must be between 10 and 14 digits';
        }

        if (Object.keys(newErrorMessages).length > 0) {
            setErrorMessages(newErrorMessages);
            return;
        }

        try {
            const response = await axios.post(`http://localhost:9000/api/import-agencies/`, fields, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });

            setFields({
                phone: '',
                vehicleCompany: '',
                modelVehicle: '',
                nameSpareAndNumber: '',
            });

            setErrorMessages({});
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Agencies Import</h1>
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
                                <label htmlFor="exampleInputnameSpareAndNumber" className="form-label">Name Spare And Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputnameSpareAndNumber"
                                    aria-describedby="nameSpareAndNumberHelp"
                                    value={fields.nameSpareAndNumber}
                                    onChange={(e) => handleFieldChange('nameSpareAndNumber', e.target.value)}
                                />
                                {errorMessages.nameSpareAndNumber && <div className="text-danger">{errorMessages.nameSpareAndNumber}</div>}
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss='modal'
                            onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCreateImport;
