import React from 'react'; 
import { StyleSheet, View } from 'react-native'; 
import DetailListItem from '../components/DetailListItem'; 

const Options = ({ navigation }) => { 
    return ( 
        <View style={styles.container}> 
            <DetailListItem 
                title="Update Profile" 
                onPress={() => navigation.navigate('Profile')} 
            /> 
            <DetailListItem 
                title="Change Language" 
                onPress={() => alert('Change Language pressed')} 
            /> 
            <DetailListItem 
                title="Sign Out" 
                onPress={() => alert('Sign Out pressed')} 
            /> 
        </View> 
    ); 
} 

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: 'white', 
    }, 
}); 

export default Options; 
