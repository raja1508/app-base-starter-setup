// import { TextInput, View, Text } from "react-native";

// export default function AuthInput(){
//     return (
//         <View className="auth-field">
//             <Text className="auth-label">Email Address</Text>
//             <TextInput
//             className={`auth-input ${emailTouched && !emailValid && "auth-input-error"}`}
//             autoCapitalize="none"
//             value={emailAddress}
//             placeholder="name@example.com"
//             placeholderTextColor="rgba(0, 0, 0, 0.4)"
//             onChangeText={setEmailAddress}
//             onBlur={() => setEmailTouched(true)}
//             keyboardType="email-address"
//             autoComplete="email"
//             />
//             {emailTouched && !emailValid && (
//             <Text className="auth-error">
//                 Please enter a valid email address
//             </Text>
//             )}
//             {errors.fields.identifier && (
//             <Text className="auth-error">
//                 {errors.fields.identifier.message}
//             </Text>
//         )}
//     </View>
        
//     )
// }