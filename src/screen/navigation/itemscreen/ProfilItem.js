import React from 'react'
import { View, Text } from 'react-native'

const ProfilItem = ({navigation}) => {
    return (
        <View style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent:'center'}}>

            <Text
            onPress={() => navigation.navigate('Home')}
            style={{fontSize: 26, fontWeight: 'bold'}}
            >Profil Screen</Text>
        </View>
    )
}

export default ProfilItem;