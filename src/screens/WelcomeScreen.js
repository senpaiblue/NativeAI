import {View, Text, SafeAreaView, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import Friday from "../../assets/Friday.png"
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Friday} style={{width:wp(100), height:hp(100)}}>
      <SafeAreaView className="flex-1 flex justify-around">
        <View className="space-y-2">
          <Text  style={{fontSize:wp(10)}} className="text-center font-bold text-gray-700">
            Friday
          </Text>
          <Text style={{fontSize:wp(4)}} className="text-center tracking-wider text-gray-600 font-semibold">
            What can I do for you today Mr. Stark?
          </Text>
        </View>
        <TouchableOpacity className="bg-emerald-600 p-4 mx-5 rounded-3xl" onPress={()=> navigation.navigate('Home')}>
          <Text style={{fontSize:wp(6)}} className="text-center font-semibold text-white">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}
