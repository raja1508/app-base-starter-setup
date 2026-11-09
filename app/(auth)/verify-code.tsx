import Button from "@/components/ui/Button";
import AuthInput from "@/components/auth/AuthInput";
import AuthLogo from "@/components/auth/AuthLogo";
import { useSignUp } from "@clerk/expo";
import { useLocalSearchParams, useRouter, type Href } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function VerifyCode() {
    const { signUp, errors, fetchStatus } = useSignUp();
    const router = useRouter();

    // Email passed as param from sign-up screen
    const { email } = useLocalSearchParams<{ email: string }>();

    const [code, setCode] = useState("");

    const handleVerify = async () => {
        await signUp.verifications.verifyEmailCode({ code });

        if (signUp.status === "complete") {
            await signUp.finalize({
                navigate: ({ session, decorateUrl }) => {
                    if (session?.currentTask) {
                        console.log(session?.currentTask);
                        return;
                    }

                    router.replace("/(tabs)" as Href);
                },
            });
        } else {
            console.error("Sign-up attempt not complete:", signUp);
        }
    };

    const handleResend = async () => {
        await signUp.verifications.sendEmailCode();
    };

    return (
        <SafeAreaView className="auth-safe-area">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="auth-screen"
            >
                <ScrollView
                    className="auth-scroll"
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="auth-content">

                        {/* Branding */}
                        <View className="auth-brand-block">
                            <View className="auth-logo-wrap">
                                <AuthLogo />
                                <View>
                                    <Text className="auth-wordmark">Recurrly</Text>
                                    <Text className="auth-wordmark-sub">SUBSCRIPTIONS</Text>
                                </View>
                            </View>
                            <Text className="auth-title">Verify your email</Text>
                            <Text className="auth-subtitle">
                                We sent a 6-digit code to{"\n"}
                                {email ?? "your email address"}
                            </Text>
                        </View>

                        {/* Verification Form */}
                        <View className="auth-card">
                            <View className="auth-form">

                                <AuthInput
                                    label="Verification Code"
                                    value={code}
                                    onChangeText={setCode}
                                    placeholder="Enter 6-digit code"
                                    keyboardType="number-pad"
                                    autoComplete="one-time-code"
                                    maxLength={6}
                                    error={errors.fields.code?.message}
                                    hasError={!!errors.fields.code}
                                />

                                <Button
                                    label={fetchStatus === "fetching" ? "Verifying..." : "Verify Email"}
                                    onPress={handleVerify}
                                    loading={fetchStatus === "fetching"}
                                    disabled={!code || fetchStatus === "fetching"}
                                />

                                <Button
                                    variant="secondary"
                                    label="Resend Code"
                                    onPress={handleResend}
                                    disabled={fetchStatus === "fetching"}
                                />

                                <Button
                                    variant="secondary"
                                    label="Start Over"
                                    onPress={() => router.replace("/(auth)/sign-up")}
                                    disabled={fetchStatus === "fetching"}
                                />

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}