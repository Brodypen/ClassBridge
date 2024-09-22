import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { ImageBackground } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/ui';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <ImageBackground
        source={require('../assets/signin_background.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View className="flex-1 justify-center p-6 mt-60">
          <View className="space-y-4 mt-12">
            <ControlledInput
              testID="email-input"
              control={control}
              name="email"
              placeholder="Email"
            />
            <ControlledInput
              testID="password-input"
              control={control}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            />
            <Button
  testID="login-button"
  label="Log in"
  onPress={handleSubmit(onSubmit)}
  className="mt-12 rounded-full h-16"
/>
          </View>

          {/* Text positioned at the bottom */}
          <View
            style={{
              position: 'absolute',
              bottom: 20, // Distance from the bottom of the screen
              left: 0,
              right: 0,
              paddingHorizontal: 20, // Padding to match the rest of your layout
            }}
          >
            <Text style={{ fontSize: 11, textAlign: 'left' }}>By continuing, you agree to our 
  <Text style={{ fontWeight: 'bold', fontSize: 11 }}> Terms of Service </Text> 
  and acknowledge that you have read our 
  <Text style={{ fontWeight: 'bold', fontSize: 11 }}> Privacy Policy </Text> 
  to learn how we use, collect, and share your data.
</Text>


          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
