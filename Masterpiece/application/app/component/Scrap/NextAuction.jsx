import styles from './style';
import { Text, View, TouchableOpacity, Image, Linking, } from 'react-native';

export default function NextAuction() {

    // Call phone
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

    // Open website
    const handleWebsitePress = (url) => {
        Linking.openURL(url)
            .catch((error) => console.error('Error opening website:', error));
    };

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.tilte}>This service is only available by contacting us</Text>
                <TouchableOpacity
                    style={styles.phoneContainer}
                    onPress={() => handleCallPress('0789468554')} >
                    <Image
                        source={require('../../assets/icons/phone-call.png')}
                        style={styles.imageRight}
                    />
                    <Text style={styles.phoneText}>0789468554</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.hrContainer}>
                <View style={styles.hr} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.hr} />
            </View>

            <View>
                <Text style={styles.tilte}>Visit the website</Text>
                <TouchableOpacity
                    style={styles.phoneContainer}
                    onPress={() => handleWebsitePress('https://www.example.com')}>
                    <Image
                        source={require('../../assets/icons/website.png')}
                        style={styles.imageRight}
                    />
                    <Text style={styles.phoneText}>Website</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
