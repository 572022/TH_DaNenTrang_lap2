import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../utility/Api';
import ContactListItem from '../components/ContactListItem';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native';

const keyExtractor = ({ phone }) => phone;

const Contact = ({ navigation }) => {
  const { contacts, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Load dữ liệu
  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then((contacts) => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch((e) => {
        dispatch(fetchContactsError());
      });
  }, [dispatch]);

  // Sắp xếp
  const contactsSorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));

  // Render từng liên hệ
  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && contactsSorted.length === 0 && <Text>No contacts available</Text>}
      {!loading && !error && contactsSorted.length > 0 && (
        <FlatList data={contactsSorted} keyExtractor={keyExtractor} renderItem={renderContact} />
      )}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});
