import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Date from 'react-native-vector-icons/Fontisto';
import Delete from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/FontAwesome';

export default function MyPosts() {

    const MyPost = [
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
    ];

    const renderItemMyPost = ({ item }) => (
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
                    <Date name="date" size={25} />
                    <Text style={styles.textRight}> 17/9/2023</Text>
                </View>


                <View style={styles.imageContainer}>
                    <Delete name="delete" size={25} />
                    {/* <Edit name="edit" size={25} /> */}
                </View>

            </View>
        </TouchableOpacity >
    );

    return (
        <FlatList
            data={MyPost}
            renderItem={renderItemMyPost}
            keyExtractor={(item) => item.id}
            style={styles.container}
        />
    )
}


const styles = StyleSheet.create({
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
        padding: 10,
        gap: 10
    },
    textRight: {
        fontSize: 16,
    },
});
