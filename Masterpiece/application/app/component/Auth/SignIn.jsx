import React from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();


    const handleSignIn = () => {
        alert("log in");
    };

    return (
        <Center flex={1}>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Sign in to your account
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Login to access your Account
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    <Button
                        mt="2"
                        colorScheme="indigo"
                        backgroundColor="#3B5998"
                        onPress={handleSignIn}
                    >
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignIn;
