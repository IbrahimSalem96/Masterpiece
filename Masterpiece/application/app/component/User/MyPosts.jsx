import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Date from 'react-native-vector-icons/Fontisto';
import Delete from 'react-native-vector-icons/AntDesign';
import Edit from 'react-native-vector-icons/FontAwesome';
import { UserInfoContext } from '../../context/UserInfo';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'

export default function MyPosts() {
    const { userInfo, setUserInfo, fetchUserInfo } = useContext(UserInfoContext);

    const [myPost, setMyPost] = useState([]);

    useEffect(() => {
        getMyPosts();
    }, [])

    const getMyPosts = () => {
        axios.get(`http://10.0.2.2:8000/api/post/my-post/${userInfo._id}`, {
            headers: {
                Authorization: "Baerer " + userInfo.token
            }
        })
            .then((response) => {
                setMyPost(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`http://10.0.2.2:8000/api/post/${id}`, {
            headers: {
                Authorization: "Baerer " + userInfo.token
            }
        })
            .then((response) => {
                setMyPost(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }


    const renderItemMyPost = ({ item }) => {
        const dateTimeString = item.createdAt.split('T')[0];
        return (
            <TouchableOpacity style={styles.item} key={item._id}>
                <View style={styles.left}>
                    <Text style={styles.card}>{item.nameProduct}</Text>

                    <Image
                        style={styles.imageCard}
                        source={{ uri: item.image.url }}
                        resizeMode="contain" />

                </View>

                <View style={styles.right}>
                    <View style={styles.imageContainer}>
                        <Icon name="money" size={25} />
                        <Text style={styles.textRight}> ${item.price}</Text>
                    </View>


                    <View style={styles.imageContainer}>
                        <Date name="date" size={25} />
                        <Text style={styles.textRight}>{dateTimeString}</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Delete name="delete" size={25} onPress={() => handleDelete(item._id)} />
                        {/* <Edit name="edit" size={25} /> */}
                    </View>

                </View>
            </TouchableOpacity >
        )
    }


    return (
        <FlatList
            data={myPost}
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
