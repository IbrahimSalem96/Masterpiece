import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        1 === 2 ? (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('User')}
            >
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={{ width: 50, height: 50 }}
                />
            </TouchableOpacity>
        )
    );
}
