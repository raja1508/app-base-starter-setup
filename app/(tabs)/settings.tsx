import { Image, Pressable, Text, View } from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useClerk, useUser } from "@clerk/expo";
import images from "@/constants/images";

const SafeAreaView = styled(RNSafeAreaView);
export default function Settings() {
  const {signOut} = useClerk(); 
  const {user} = useUser(); 

  const displayName = user?.firstName || user?.fullName || user?.emailAddresses[0]?.emailAddress || 'User';
  const email = user?.emailAddresses[0]?.emailAddress;

  const handleSignOut = async () => {
    try {
        await signOut();
    } catch (error) {
        console.error('Sign-out failed:', error);
        // Don't reset analytics if sign-out failed
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
        <Text className="text-3xl font-sans-bold text-primary mb-6">Settings</Text>

        {/* User Profile Section */}
        <View className="auth-card mb-5">
            <View className="flex-row items-center gap-4 mb-4">
                <Image
                    source={user?.imageUrl ? { uri: user.imageUrl } : images.avatar}
                    className="size-16 rounded-full"
                />
                <View className="flex-1">
                    <Text className="text-lg font-sans-bold text-primary">{displayName}</Text>
                    {email && (
                        <Text className="text-sm font-sans-medium text-muted-foreground">{email}</Text>
                    )}
                </View>
            </View>
        </View>

        {/* Logout button */}
        <Pressable
            className="auth-button bg-destructive"
            onPress={handleSignOut}
          >
            <Text className="auth-button-text text-white">Log Out</Text>
        </Pressable>     
    </SafeAreaView>
  );
}