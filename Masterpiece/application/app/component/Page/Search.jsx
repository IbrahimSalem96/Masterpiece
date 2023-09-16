import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/'

export default function Search() {

    const CarBrands = [
        {
            id: '1',
            image: require('../../assets/images/CarBrands-1.png'),
        },
        {
            id: '2',
            image: require('../../assets/images/CarBrands-2.png'),
        },
        {
            id: '3',
            image: require('../../assets/images/CarBrands-3.png'),

        },
        {
            id: '4',
            image: require('../../assets/images/CarBrands-4.png'),

        },
        {
            id: '5',
            image: require('../../assets/images/CarBrands-5.png'),

        },
        {
            id: '6',
            image: require('../../assets/images/CarBrands-6.png'),

        },

    ];



    const renderItemCarBrands = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Image
                style={styles.imageCard}
                source={item.image}
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

});
