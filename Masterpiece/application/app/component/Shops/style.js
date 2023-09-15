import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
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
    imageRight: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    textRight: {
        fontSize: 16,
    },
    phoneContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 8,
    },
    phoneText: {
        color: 'white',
        fontSize: 16,
    },
});
