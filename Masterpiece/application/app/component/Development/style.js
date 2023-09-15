import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    tilte: {
        fontSize: 20,
        fontWeight: '500',
    },
    imageRight: {
        width: 40,
        height: 40,
    },
    phoneContainer: {
        flexDirection: 'row',
        backgroundColor: '#3B5998',
        color: 'white',
        padding: 5,
        borderRadius: 32,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    phoneText: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 20,
    },
    hrContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    hr: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 10,
    },
    orText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
