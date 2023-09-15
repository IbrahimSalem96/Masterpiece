import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Share } from 'react-native';
import { COLORS } from '../../constants/'
import { useNavigation } from '@react-navigation/native';
export default function Profile() {
    const navigation = useNavigation();

    const List = [
        {
            id: '1',
            title: 'Sing In | Sign Up',
            screen: 'SignIn',
            image: require('../../assets/icons/Sing.png'),
        },
        {
            id: '2',
            title: 'Contact us',
            screen: 'ContactUs',
            image: require('../../assets/icons/Contactus.png'),
        },
        {
            id: '3',
            title: 'About',
            screen: 'About',
            image: require('../../assets/icons/About.png'),

        },
        {
            id: '4',
            title: 'Share Application ',
            shareText: 'Take a look at this application, it contains everything you want in your car and provides a lot of services',
            image: require('../../assets/icons/ShareApplication.png'),

        },
        // {
        //     id: '5',
        //     title: 'Setting',
        //     screen: '',
        //     image: require('../../assets/icons/Setting.png'),

        // },

    ];
    const renderItemList = ({ item }) => (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                if (item.screen) {
                    navigation.navigate(item.screen);
                } else if (item.shareText) {
                    Share.share({
                        message: item.shareText,
                    });
                }
            }}
        >
            <Image
                style={styles.imageCard}
                source={item.image}
            />
            <Text style={styles.card}>{item.title}</Text>
        </TouchableOpacity>
    );



    return (
        <View>
            <View style={styles.contanier}>
                <Image
                    source={require('../../assets/images/logoLarge.png')}
                />
            </View>

            <View style={styles.list}>
                <FlatList
                    data={List}
                    renderItem={renderItemList}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    contanier: {
        height: 300,
        backgroundColor: COLORS.nav,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        elevation: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: '#a0a0a0',
        backgroundColor: '#f2f2f2',
    },
    imageCard: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    card: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500'
    },
});


