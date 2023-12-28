import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Features from '../components/features';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Bot from '../../assets/AI.svg';
import {dummyMessages} from '../constants';

export default function HomeScreen() {
  const [messages, setmessages] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image source={Bot} style={{height: hp(15), width: hp(15)}} />
        </View>
        {/* features || messages  */}
        {messages.length > 0 ? (
          <View className='"space-y-2 flex-1'>
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View
              style={{height: hp(58)}}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((messages, index) => {
                  return (
                    <View>
                      <Text>{messages.content}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
}
