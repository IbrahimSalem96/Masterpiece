// In App.js in a new project

import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native'
import { COLORS } from './constants/index'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import { Home, Shop, Profile, Search, About, ContactUs } from './component/Page/index'
import { Buses, Cars, Machines, Motorcycles, Scrap, Trucks, SpareParts } from './component/Shops'
import { User, MyPost, NewPost, Settings, ChangePassword, EditProfile } from './component/User/'
import { SignIn, SignUp, Formation } from './component/Auth/'
import { External, Internal } from './component/Development/'
import { Import, Maintenance } from './component/Agencies/'
import { NextAuction, ScrapAuction, ScrapAuctionsDetails, NextAuctionDetails } from './component/Scrap/'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator >

          <Stack.Screen name="Home" component={Home}
            options={({ navigation }) => ({
              title: 'Home',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            })}
          />

          <Stack.Screen name="Shop" component={Shop}
            options={{
              title: 'Shops',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Search" component={Search}
            options={{
              title: 'Search',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Profile" component={Profile}
            options={{
              header: () => {
                <Profile />
              }
            }}
          />

          <Stack.Screen name="ContactUs" component={ContactUs}
            options={{
              header: () => {
                <ContactUs />
              }
            }}
          />

          <Stack.Screen name="About" component={About}
            options={{
              header: () => {
                <ContactUs />
              }
            }}
          />

          {/* Start Shpos Router  */}
          <Stack.Screen name="Buses" component={Buses}
            options={{
              title: 'Buses',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Cars" component={Cars}
            options={{
              title: 'Cars',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Machines" component={Machines}
            options={{
              title: 'Machines',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Motorcycles" component={Motorcycles}
            options={{
              title: 'Motorcycles',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Scrap" component={Scrap}
            options={{
              title: 'Scrap',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Trucks" component={Trucks}
            options={{
              title: 'Trucks',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="SpareParts" component={SpareParts}
            options={{
              title: 'SpareParts',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />
          {/* End Shpos Router  */}


          {/* Start User Router  */}
          {
            1 === 2 ? (
              <>
                <Stack.Screen name="User" component={User}
                  options={{
                    title: 'User',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="MyPost" component={MyPost}
                  options={{
                    title: 'MyPost',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="NewPost" component={NewPost}
                  options={{
                    title: 'NewPost',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="Settings" component={Settings}
                  options={{
                    title: 'Settings',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="ChangePassword" component={ChangePassword}
                  options={{
                    title: 'Change Password',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="EditProfile" component={EditProfile}
                  options={{
                    title: 'Edit Profile',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn}
                  options={{
                    title: 'Sign in',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="SignUp" component={SignUp}
                  options={{
                    title: 'Sign up',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />

                <Stack.Screen name="Formation" component={Formation}
                  options={{
                    title: 'Formation',
                    headerTitleAlign: 'center',
                    headerStyle: {
                      backgroundColor: COLORS.nav,
                    },
                    headerTintColor: COLORS.white,
                    headerRight: () => (
                      <Header />
                    ),
                  }} />
              </>
            )
          }
          {/* End User Router  */}


          {/* Start Development Router */}
          <Stack.Screen name="External" component={External}
            options={{
              title: 'External',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Internal" component={Internal}
            options={{
              title: 'Internal',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />
          {/* End Development Router */}

          {/* Start Development Router */}
          <Stack.Screen name="Import" component={Import}
            options={{
              title: 'Import',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="Maintenance" component={Maintenance}
            options={{
              title: 'Maintenance',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />
          {/* End Development Router */}

          {/* Start Scrap Router */}
          <Stack.Screen name="ScrapAuction" component={ScrapAuction}
            options={{
              title: 'Scrap Auction',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="NextAuction" component={NextAuction}
            options={{
              title: 'Next Auction',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="ScrapAuctionsDetails" component={ScrapAuctionsDetails}
            options={{
              title: 'Scrap Auctions Details',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          <Stack.Screen name="NextAuctionDetails" component={NextAuctionDetails}
            options={{
              title: 'Next Auction Details',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: COLORS.nav,
              },
              headerTintColor: COLORS.white,
              headerRight: () => (
                <Header />
              ),
            }}
          />

          {/* End Scrap Router */}
        </Stack.Navigator>
        <Footer />
      </NavigationContainer >
    </NativeBaseProvider>
  );
}

export default App;

