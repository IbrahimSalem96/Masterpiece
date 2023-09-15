import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Shop() {
    const navigation = useNavigation();

    const shop = [
        {
            id: '1',
            title: 'Cars',
            screen: 'Cars',
            image: require('../../assets/images/Shop-Cars.png'),
        },
        {
            id: '2',
            title: 'Motorcycles',
            screen: 'Motorcycles',
            image: require('../../assets/images/Shop-Motorcycles.png'),
        },
        {
            id: '3',
            title: 'Buses',
            screen: 'Buses',
            image: require('../../assets/images/Shop-Buses.png'),

        },
        {
            id: '4',
            title: 'Trucks',
            screen: 'Trucks',
            image: require('../../assets/images/Shop-Trucks.png'),

        },
        {
            id: '5',
            title: 'Machines',
            screen: 'Machines',
            image: require('../../assets/images/Shop-Machines.png'),

        },
        {
            id: '6',
            title: 'Spare Parts',
            screen: 'SpareParts',
            image: require('../../assets/images/Shop-spareParts.png'),

        },
        {
            id: '7',
            title: 'Scrap',
            screen: 'Scrap',
            image: require('../../assets/images/Shop-Scrap.png'),
        },

    ];

    const renderItemshop = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate(item.screen)}>
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity >
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={shop}
                renderItem={renderItemshop}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatlistContent}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    flatlistContent: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'white',
        width: 160,
        height: 140,
        padding: 20,
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
        width: 90,
        height: 60,
    },
    card: {
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
});
