import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignUp = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', {
                username: username,
                email: email,
                password: password
            });

            console.log('Response from server:', response.data);

            navigation.navigate('Home');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Center flex={1} w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Create An Account
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Sign up to get started shop
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={text => setEmail(text)} value={email} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Username</FormControl.Label>
                        <Input onChangeText={text => setUsername(text)} value={username} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={text => setPassword(text)} value={password} secureTextEntry />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo"
                        backgroundColor="#3B5998"
                        onPress={handleSignUp}>
                        Sign up
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignUp;
