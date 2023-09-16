import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function NewPost() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [kilometres, setKilometres] = useState('');
    const [transmissionType, setTransmissionType] = useState('');
    const [seats, setSeats] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [description, setDescription] = useState('');

    const handleConfirm = () => {
        console.log('Name:', name);
        console.log('Product:', product);
        console.log('Price:', price);

    };






    return (
        <View style={{ padding: 20 }}>
            <View style={styles.row}>
                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Name Product"
                    style={styles.input}
                />
                <TextInput
                    value={price}
                    onChangeText={text => setPrice(text)}
                    placeholder="Price"
                    style={styles.input}
                />
            </View>

            <View style={styles.row}>
                <TextInput
                    value={location}
                    onChangeText={text => setLocation(text)}
                    placeholder="Location"
                    style={styles.input}
                />
                <TextInput
                    value={kilometres}
                    onChangeText={text => setKilometres(text)}
                    placeholder="Kilometres"
                    style={styles.input}
                />
            </View>


            <View style={styles.row}>
                <TextInput
                    value={transmissionType}
                    onChangeText={text => setTransmissionType(text)}
                    placeholder="Transmission type"
                    style={styles.input}
                />
                <TextInput
                    value={seats}
                    onChangeText={text => setSeats(text)}
                    placeholder="Seats"
                    style={styles.input}
                />
            </View>


            <TextInput
                value={fuelType}
                onChangeText={text => setFuelType(text)}
                placeholder="Fuel Type"
                style={styles.input}
            />


            <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                placeholder="Description"
                style={styles.textArea}
                multiline
                numberOfLines={5}
            />


            <TouchableOpacity
                style={styles.button}
                onPress={handleConfirm}
            >
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    row: {
        flexDirection: 'row',
        gap: 10
    },
    input: {
        width: 180,
        height: 70,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    textArea: {
        height: 100,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        padding: 20,
        textAlignVertical: 'top',
    },
    button: {
        height: 50,
        backgroundColor: '#3B5998',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18
    },

};
