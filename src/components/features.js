import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import gpt from "../../assets/gptIcon.png"
import dalle from "../../assets/Dalle.png"
import smart from "../../assets/Smartai.png"


export default function features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-4">
      <View className=" flex-row items-center space-x-1">
          <Image source={gpt} style={{width:hp(6), height:hp(6)}}  />
          <Text style ={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> ChatGPT</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
      ChatGPT is an AI language model developed by OpenAI, capable of understanding and generating human-like text based on user input.
      </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
      <View className=" flex-row items-center space-x-1">
          <Image source={dalle} style={{width:hp(6), height:hp(6)}}  />
          <Text style ={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> DALL-E</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
      ChatGPT is an AI language model developed by OpenAI, capable of understanding and generating human-like text based on user input.
      </Text>
      </View>
      <View className="bg-neutral-400 p-4 rounded-xl space-y-2">
      <View className=" flex-row items-center space-x-1">
          <Image source={smart} style={{width:hp(6), height:hp(6)}}  />
          <Text style ={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> SMART-AI</Text>
      </View>
      <Text style={{fontSize:wp(3.8)}} className="text-gray-700 font-medium">
      ChatGPT is an AI language model developed by OpenAI, capable of understanding and generating human-like text based on user input.
      </Text>
      </View>
    </View>
  );
}
