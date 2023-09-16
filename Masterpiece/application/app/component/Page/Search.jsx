import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/';

export default function Search() {
    const [selectedItem, setSelectedItem] = useState(null);

    const CarBrands = [
        {
            id: '1',
            icon: require('../../assets/images/CarBrands-1.png'),
            image: require('../../assets/Search/mercedes.jpeg'),
            title: 'Mercedes',
            location: 'King Abdullah II St 434, Amman',
            phoneNumber: '123-456-7890',
        },
        {
            id: '2',
            icon: require('../../assets/images/CarBrands-2.png'),
            image: require('../../assets/Search/firar.jpg'),
            title: 'Firar',
            location: '28380 Tracy Rd.Plant 3(PGT3) Walbridge, OH 43465 USA',
            phoneNumber: '123-456-7890',
        },
        {
            id: '3',
            icon: require('../../assets/images/CarBrands-3.png'),
            image: require('../../assets/Search/BMW.jpeg'),
            title: 'BMW',
            location: 'Bayader Wadi Al Seer, Ahmad Bani Younis St. Building 8, Amman',
            phoneNumber: '123-456-7890',

        },
        {
            id: '4',
            icon: require('../../assets/images/CarBrands-4.png'),
            image: require('../../assets/Search/lamborghini.jpg'),
            title: 'lamborghini',
            location: 'Corniche du Fleuve, Beirut 1100 2806, Lebanon',
            phoneNumber: '123-456-7890',

        },
        {
            id: '5',
            icon: require('../../assets/images/CarBrands-5.png'),
            image: require('../../assets/Search/Audi.jpg'),
            title: 'Audi',
            location: 'Abdul Salam Naour, 40, Amman',
            phoneNumber: '123-456-7890',

        },
    ];

    const renderItemCarBrands = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => setSelectedItem(item)}
        >
            <Image
                style={styles.imageCard}
                source={item.icon}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={CarBrands}
                renderItem={renderItemCarBrands}
                keyExtractor={(item) => item.id}
                horizontal={true}
                contentContainerStyle={styles.flatlistContent}
            />

            {selectedItem && (
                <View style={styles.selectedItemContainer}>
                    <Image
                        source={selectedItem.image}
                        style={{ width: 400, height: 400, alignSelf: 'center' }}
                    />
                    <Text style={styles.selectedItemTitle}>{selectedItem.title}</Text>
                    <Text style={styles.selectedItemPhoneNumber}>{selectedItem.location}</Text>
                    <Text style={styles.selectedItemPhoneNumber}>{selectedItem.phoneNumber}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    item: {
        width: 80,
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 32,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        alignItems: 'center',
    },
    imageCard: {
        width: 30,
        height: 30,
    },
    flatlistContent: {
        paddingBottom: 20,
    },
    selectedItemContainer: {
        marginTop: 20,
    },
    selectedItemTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    selectedItemPhoneNumber: {
        fontSize: 16,
        color: 'gray',
    },
});
