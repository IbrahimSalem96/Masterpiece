import { Text, View, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { UserInfoContext } from '../../context/UserInfo';
import { useContext } from 'react';
import Auth from '../Auth/SignIn'

export default function ScrapAuction({ navigation }) {
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);

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


    const [scrapAuction, setScrapAuction] = useState();



    if (userInfo !== null) {
        useEffect(() => {
            getScrapAuction();
        })

        const getScrapAuction = () => {
            axios.get("http://10.0.2.2:8000/api/scrap/auction-service/", {
                headers: {
                    Authorization: 'Bearer ' + userInfo?.token
                }
            })
                .then((response) => {
                    setScrapAuction(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching cart data:', error);
                });
        }
    }




    const renderItemScrapAuction = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.left}>
                <Text style={styles.card}>{item.scrapName}</Text>

                <Image
                    style={styles.imageCard}
                    source={{ uri: item.image.url }}
                    resizeMode="contain" />

            </View>

            <View style={styles.right}>
                <View style={styles.imageContainer}>
                    <Icon name="money" size={25} />
                    <Text style={styles.textRight}> ${item.startingPrice}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Text style={styles.textRight}>Date: {item.date}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Text style={styles.textRight}>Time:  {item.time}</Text>
                </View>

                <TouchableOpacity
                    style={styles.subscriptionContainer} >
                    <Text style={styles.subscriptionText}
                        onPress={() => navigation.navigate('ScrapAuctionsDetails')}
                    >subscription</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        userInfo !== null ? (
            <FlatList
                data={scrapAuction}
                renderItem={renderItemScrapAuction}
                keyExtractor={(item) => item._id}
                style={styles.container}
            />
        ) : (
            <Auth />
        )
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