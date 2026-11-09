import { Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function Insights() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
        <View className="flex-1 justify-center items-center">
        <Text className="text-4xl text-center font-sans-bold text-accent">
            Insights
        </Text>
        </View>     
    </SafeAreaView>
  );
}