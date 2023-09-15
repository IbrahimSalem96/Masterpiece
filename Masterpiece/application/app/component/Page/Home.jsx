import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    // const Services = [
    //     {
    //         id: '1',
    //         title: 'Accidents',
    //         image: require('../../assets/images/Accidents.png'),
    //     },
    //     {
    //         id: '2',
    //         title: 'Maintenance request',
    //         image: require('../../assets/images/MaintenanceRequest.png'),
    //     },
    //     {
    //         id: '3',
    //         title: 'location of the pieces',
    //         image: require('../../assets/images/locationPieces.png'),

    //     },
    //     {
    //         id: '4',
    //         title: 'Before buying',
    //         image: require('../../assets/images/BeforeBuying.png'),

    //     },
    //     {
    //         id: '5',
    //         title: 'Rental service',
    //         image: require('../../assets/images/RentalService.png'),

    //     },

    // ];

    // const renderItemServices = ({ item }) => (
    //     <TouchableOpacity style={styles.item}>
    //         <Image
    //             style={styles.imageCard}
    //             source={item.image}
    //         />
    //         <Text style={styles.card}>{item.title}</Text>
    //     </TouchableOpacity>
    // );

    const Development = [
        {
            id: '1',
            title: 'External',
            image: require('../../assets/images/External.png'),
            path: "External",
        },
        {
            id: '2',
            title: 'Internal',
            image: require('../../assets/images/Internal.png'),
            path: "Internal",
        },
    ];

    const renderItemDevelopment = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate(item.path)}
        >
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity>
    );


    const Agencies = [
        {
            id: '1',
            title: 'Import',
            image: require('../../assets/images/Import.png'),
            path: "Import",
        },
        {
            id: '2',
            title: 'Maintenance assistance',
            image: require('../../assets/images/MaintenanceAssistance.png'),
            path: "Maintenance",
        },
    ];

    const renderItemAgencies = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate(item.path)}>
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity>
    );


    const ScrapJunk = [
        {
            id: '1',
            title: 'Sell and Buy',
            image: require('../../assets/images/SellBuy.png'),
            path: 'Scrap',
        },
        {
            id: '2',
            title: 'Scrap Auction Service',
            image: require('../../assets/images/ScrapAuction.png'),
            path: 'ScrapAuction',
        },
        {
            id: '3',
            title: 'Next Auction',
            image: require('../../assets/images/NextAuction.png'),
            path: 'NextAuction',
        },
    ];

    const renderItemScrapJunk = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate(item.path)}>
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            {/* <View>
                <Text style={styles.title}>Quick Services</Text>

                <FlatList
                    data={Services}
                    renderItem={renderItemServices}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View> */}

            <View>
                <Text style={styles.title}>Development  Car</Text>

                <FlatList
                    data={Development}
                    renderItem={renderItemDevelopment}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View>

            <View>
                <Text style={styles.title}>Agencies</Text>

                <FlatList
                    data={Agencies}
                    renderItem={renderItemAgencies}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View>

            <View style={styles.space}>
                <Text style={styles.title}>Scrap & Junk</Text>

                <FlatList
                    data={ScrapJunk}
                    renderItem={renderItemScrapJunk}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    contentContainerStyle={styles.flatlistContent}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    flatlistContent: {
        paddingHorizontal: 16,
        paddingLeft: 3
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
        width: 70,
        height: 60,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        paddingBottom: 10
    },
    card: {
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    space: {
        height: 250,
    },
});
