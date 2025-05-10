import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../utility/Colors'

const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={styles.borderContainer}>
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {icon && (
                    <Icon name={icon} size={24} style={{
                        Colors: Colors.black,
                        marginRight: 20}}
                    />
                )}

                <View style={styles.contentContainer}>
                    <Text style={[styles.title]}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>
        </View>
    </View>
  );
}

export default DetailListItem

DetailListItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };
  

const styles = StyleSheet.create({
    borderContainer: {
        paddingLeft: 24,
    },

    wrapper: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: Colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentContainer: {
        justifyContent: 'center',
        flex: 1
    },
    title: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 16
    },
    subtitle: {
        color: Colors.blue,
        fontSize: 15,
        marginTop: 4
    },
});