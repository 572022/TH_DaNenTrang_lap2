import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Api from '../utility/Api';
import Colors from '../utility/Colors';
import PropTypes from 'prop-types'

const ContactListItem = ({
    name, avatar, phone, onPress,
}) =>
{
    return (
        <TouchableHighlight
            underlayColor={Colors.grey}
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.contactInfo}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>

    )
}

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

export default ContactListItem

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: Colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    avatar:{
        borderRadius: 22,
        width: 44,
        height: 44
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20
    },
    title:{
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 16
    },
    subtitle:{
        color: Colors.blue,
        fontSize: 15,
        marginTop: 4
    }
});