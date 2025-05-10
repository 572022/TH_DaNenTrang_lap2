import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ContactThumbnail from '../components/ContactThumbnail';
import Colors from '../utility/Colors';
import { fetchUserContact } from '../utility/Api';

const User = ({ navigation }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUserContact()
            .then(users => {
                setUser(users);
                setLoading(false);
                setError(false);
            })
            .catch(e => {
                setLoading(false);
                setError(true);
            });
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <MaterialIcons
                    name="settings"
                    size={24}
                    style={{ color: 'white', marginRight: 10 }}
                    onPress={() => navigation.navigate('Options')}
                />
            )
        });
    }, [navigation]);

    const { avatar, name, phone } = user;

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
    },
});

export default User;