import { Text, View, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'


export default function Trucks() {
    const Services = [
        {
            id: '1',
            title: 'TOGG Anadolu',
            image: require('../../assets/images/Product-Scrap.png'),
            phone: '0777777777',
        },
        {
            id: '2',
            title: 'Mini  Cooper',
            image: require('../../assets/images/Product-Scrap1.png'),
            phone: '0777777777',
        },
        {
            id: '3',
            title: 'TOGG Anadolu',
            image: require('../../assets/images/Product-Scrap.png'),
            phone: '0777777777',
        },
        {
            id: '4',
            title: 'Mini  Cooper',
            image: require('../../assets/images/Product-Scrap1.png'),
            phone: '0777777777',
        },
        {
            id: '5',
            title: 'TOGG Anadolu',
            image: require('../../assets/images/Product-Scrap.png'),
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
            data={Services}
            renderItem={renderItemServices}
            keyExtractor={(item) => item.id}
            style={styles.container}
        />
    )
}
