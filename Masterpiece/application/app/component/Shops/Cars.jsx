import { Text, View, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Kilometer from 'react-native-vector-icons/Octicons';
import styles from './style'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Cars() {
    const [cart, setCart] = useState();

    useEffect(() => {
        getCart();
    })
    const getCart = () => {
        axios.get("http://10.0.2.2:8000/api/shop/car/")
            .then((response) => {
                // Handle the response data here
                setCart(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }

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


    const renderItemCar = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.left}>
                <Text style={styles.card}>{item.nameProduct}</Text>

                <Image
                    style={styles.imageCard}
                    source={{ uri: item.image.url }}
                    resizeMode="contain"
                />


            </View>

            <View style={styles.right}>
                <View style={styles.imageContainer}>
                    <EntypoIcon name="flow-tree" size={25} />
                    <Text style={styles.textRight}> {item.transmissionType}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Kilometer name="meter" size={25} />
                    <Text style={styles.textRight}> {item.kilometres} km</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Icon name="money" size={25} />
                    <Text style={styles.textRight}> ${item.price}</Text>
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
            renderItem={renderItemCar}
            keyExtractor={(item) => item.id}
            style={styles.container}
        />
    )
}
