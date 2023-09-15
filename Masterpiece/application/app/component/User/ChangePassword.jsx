import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function ChangePassword() {
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
            <Text style={styles.lable}>Current Password</Text>
            <TextInput
                value={currentPassword}
                onChangeText={text => setCurrentPassword(text)}
                placeholder="Current Password"
                style={styles.input}
                secureTextEntry={true}
            />

            <Text style={styles.lable}>New Password</Text>
            <TextInput
                value={newPassword}
                onChangeText={text => setNewPassword(text)}
                placeholder="New Password:"
                style={styles.input}
                secureTextEntry={true}
            />

            <Text style={styles.lable}>Confirm New Password</Text>
            <TextInput
                value={confirmNewPassword}
                onChangeText={text => setConfirmNewPassword(text)}
                placeholder="Confirm New Password"
                style={styles.input}
                secureTextEntry={true}
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
    row: {
        flexDirection: 'row',
        gap: 10
    },
    lable: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10
    },
    input: {
        height: 70,
        borderColor: '#F6F7F9',
        backgroundColor: '#E4E4E4',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
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
