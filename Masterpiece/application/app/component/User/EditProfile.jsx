import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function EditProfile() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleConfirm = () => {
        console.log('current Password:', currentPassword);
        console.log('new Password:', newPassword);
        console.log('confirm New Password:', confirmNewPassword);

    };

    return (
        <View style={styles.container}>
            <TextInput
                value={currentPassword}
                onChangeText={text => setCurrentPassword(text)}
                placeholder="Full Name"
                style={styles.input}
            />

            <TextInput
                value={newPassword}
                onChangeText={text => setNewPassword(text)}
                placeholder="bio"
                style={styles.input}
            />

            <TextInput
                value={confirmNewPassword}
                onChangeText={text => setConfirmNewPassword(text)}
                placeholder="Address"
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleConfirm}
            >
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = {
    container: {
        padding: 20
    },
    input: {
        height: 60,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 16
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
}


