import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import { useIsFirstTime } from '@/core/hooks';
import { Button, FocusAwareStatusBar, SafeAreaView, Text, View } from '@/ui';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Hey everyone!
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          We are here to do work!
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">
          Go sick!
        </Text>
        <Text className="my-1 text-left text-lg">
          Yup
        </Text>
        <Text className="my-1 text-left text-lg">
          Skip all this
        </Text>
        <Text className="my-1 text-left text-lg">
          Sorry oops.
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
