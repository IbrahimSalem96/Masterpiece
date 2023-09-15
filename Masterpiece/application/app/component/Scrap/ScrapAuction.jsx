import { Text, View, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ScrapAuction({ navigation }) {
    const Scrap = [
        {
            id: '1',
            title: 'Trucks 1',
            image: require('../../assets/images/Product-Scrap.png'),
            Date: "27/8/2023",
            Time: "27/8/2023",
            path: "ScrapAuctionsDetails"
        },
        {
            id: '2',
            title: 'TOGG Anadolu',
            image: require('../../assets/images/Product-Scrap1.png'),
            Date: "27/8/2023",
            Time: "27/8/2023",
            path: "ScrapAuctionsDetails"
        },
        {
            id: '3',
            title: 'Mini  Cooper',
            image: require('../../assets/images/Product-Scrap.png'),
            Date: "27/8/2023",
            Time: "27/8/2023",
            path: "ScrapAuctionsDetails"
        },

    ];


    const renderItemScrap = ({ item }) => (
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
                    <Icon name="money" size={25} />
                    <Text style={styles.textRight}> $20000</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Text style={styles.textRight}>Date: {item.Date}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Text style={styles.textRight}>Time:  {item.Time}</Text>
                </View>

                <TouchableOpacity
                    style={styles.subscriptionContainer}
                    onPress={() => navigation.navigate(item.path)}>
                    <Text style={styles.subscriptionText}>subscription</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={Scrap}
            renderItem={renderItemScrap}
            keyExtractor={(item) => item.id}
            style={styles.container}
        />
    )
}


styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    left: {
        width: 210,
        borderRightWidth: .4
    },
    right: {
        paddingLeft: 10
    },
    imageCard: {
        width: 200,
        height: 100
    },
    card: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 9,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    },
    textRight: {
        fontSize: 16,
    },
    subscriptionContainer: {
        flexDirection: 'row',
        backgroundColor: '#3B5998',
        padding: 8,
        borderRadius: 32,
        justifyContent: 'center',
    },
    subscriptionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});