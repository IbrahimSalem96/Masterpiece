import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

function Edit({ editId, adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        username: '',
        location: '',
        bio: '',
        phone: '',
        price: ''
    });

    const [errorMessages, setErrorMessages] = useState({});

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

            const response = await axios.put(`http://localhost:9000/api/service-provider/${editId}`, fields, {
                headers: {
                    Authorization: "Bearer " + adminInfo.token,
                },
            });

            setFields({
                username: '',
                location: '',
                bio: '',
                phone: '',
                price: ''
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
            })

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
            })
        };
    }


    const handleFieldChange = (fieldName, value) => {
        setFields(prevFields => ({
            ...prevFields,
            [fieldName]: value
        }));

        setErrorMessages(prevErrors => ({
            ...prevErrors,
            [fieldName]: ''
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
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername"
                                    aria-describedby="usernameHelp"
                                    value={fields.username}
                                    onChange={(e) => handleFieldChange('username', e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputBio" className="form-label">Bio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputBio"
                                    aria-describedby="BioHelp"
                                    value={fields.bio}
                                    onChange={(e) => handleFieldChange('bio', e.target.value)}
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
                                <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPrice"
                                    aria-describedby="PriceHelp"
                                    value={fields.price}
                                    onChange={(e) => handleFieldChange('price', e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                                <select
                                    className="form-select"
                                    value={fields.location}
                                    onChange={(e) => handleFieldChange('location', e.target.value)}
                                    aria-label="Default select example">
                                    <option value=""> </option>
                                    <option value="Amman">Amman</option>
                                    <option value="Zarqa">Zarqa</option>
                                    <option value="AlSalt">AlSalt</option>
                                    <option value="Ajloun">Ajloun</option>
                                    <option value="Jerash">Jerash</option>
                                    <option value="Irbid">Irbid</option>
                                    <option value="Mafraq">Mafraq</option>
                                    <option value="Ma'an">Ma'an</option>
                                    <option value="AlTafilah">AlTafilah</option>
                                    <option value="Aqaba">Aqaba</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
