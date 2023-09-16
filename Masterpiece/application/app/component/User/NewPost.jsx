import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, Button, Image, sty } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { UserInfoContext } from '../../context/UserInfo';
import { useNavigation } from '@react-navigation/native';
import File from 'react-native-vector-icons/FontAwesome'

export default function NewPost() {
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);
    const [nameProduct, setName] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [kilometres, setKilometres] = useState('');
    const [transmissionType, setTransmissionType] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [phone, setPhone] = useState('')
    const [section, setSection] = useState("Cars")
    const navigation = useNavigation();



    const handleConfirm = async () => {
        try {
            const formData = new FormData();
            formData.append('image', {
                uri: image,
                type: 'image/jpeg',
                name: 'image.jpg',
            });

            formData.append('nameProduct', nameProduct);
            formData.append('price', price);
            formData.append('location', location);
            formData.append('kilometres', kilometres);
            formData.append('transmissionType', transmissionType);
            formData.append('fuelType', fuelType);
            formData.append('description', description);
            formData.append('phone', phone);
            formData.append('section', section);
            const response = await axios.post(`http://10.0.2.2:8000/api/post/`, formData, {
                headers: {
                    Authorization: "Bearer " + userInfo.token,
                    'Content-Type': 'multipart/form-data',
                },
            });


            navigation.navigate('User');

        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View style={{ padding: 20 }}>
            <View style={styles.row}>
                <TextInput
                    value={nameProduct}
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
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    placeholder="phone"
                    style={styles.input}
                />

            </View>

            <View style={styles.row}>
                <TextInput
                    value={fuelType}
                    onChangeText={text => setFuelType(text)}
                    placeholder="Fuel Type"
                    style={styles.input}
                />

                <Text style={styles.inputFile} onPress={pickImage}>
                    <File name="file-photo-o" size={32} />
                </Text>

            </View>

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
    inputFile: {
        width: 180,
        height: 70,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlign: "center",
        alignItems: 'center',
        paddingTop: 20,
        color: 'gray',
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
