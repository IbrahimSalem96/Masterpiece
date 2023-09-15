import { Text, View, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Kilometer from 'react-native-vector-icons/Octicons';
import styles from './style'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Cars() {
    const [cart, SetCart] = useState();

    useEffect(() => {
        getCart();
    })
    const getCart = () => {
        axios.get("http://10.0.2.2:8000/api/shop/car/")
            .then((response) => {
                // Handle the response data here
                SetCart(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }

    const Services = [
        {
            id: '1',
            title: 'Accidents',
            image: require('../../assets/images/Product-Cars.png'),
            phone: '+1234567890',
        },
        {
            id: '2',
            title: 'Maintenance request',
            image: require('../../assets/images/Product-Cars.png'),
            phone: '0777777777',

        },
        {
            id: '3',
            title: 'location of the pieces',
            image: require('../../assets/images/Product-Cars.png'),
            phone: '0777777777',
        },
        {
            id: '4',
            title: 'Before buying',
            image: require('../../assets/images/Product-Cars.png'),
            phone: '0777777777',
        },
        {
            id: '5',
            title: 'Rental service',
            image: require('../../assets/images/Product-Cars.png'),
            phone: '0777777777',
        },

    ];


    //call phone
    const handleCallPress = (phoneNumber) => {
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.canOpenURL(phoneUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(phoneUrl);
                }
            })
            .catch((error) => console.error('Error opening phone app:', error));
    };


    const renderItemServices = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.left}>
                <Text style={styles.card}>{item.title}</Text>

                <Image
                    style={styles.imageCard}
                    source={item.image}
                    resizeMode="contain" />

            </View>

            <View style={styles.right}>
                <View style={styles.imageContainer}>
                    <EntypoIcon name="flow-tree" size={25} />
                    <Text style={styles.textRight}> Automatic</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Kilometer name="meter" size={25} />
                    <Text style={styles.textRight}> 420 km</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Icon name="money" size={25} />
                    <Text style={styles.textRight}> $20000</Text>
                </View>


                <TouchableOpacity
                    style={styles.phoneContainer}
                    onPress={() => handleCallPress(item.phone)} >
                    <Image
                        source={require('../../assets/icons/phone-call.png')}
                        style={styles.imageRight}
                    />
                    <Text style={styles.phoneText}>{item.phone}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );


    return (
        <FlatList
            data={cart}
            renderItem={renderItemServices}
            keyExtractor={(item) => item.id}
            style={styles.container}
        />
    )
}
