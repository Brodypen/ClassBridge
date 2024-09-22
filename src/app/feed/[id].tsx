import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import { useCourse } from '@/api';
import images from '@/assets/images';
import { ActivityIndicator, FocusAwareStatusBar, Text, View } from '@/ui';
import { Image } from '@/ui';
export default function Post() {
  const local = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError } = useCourse({
    //@ts-ignore
    variables: { id: local.id },
  });

  if (isPending) {
    return (
      <View className="flex-1 justify-center  p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Back' }} />
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </View>
    );
  }
  if (isError) {
    return (
      <View className="flex-1 justify-center p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Back' }} />
        <FocusAwareStatusBar />
        <Text className="text-center">Error loading post</Text>
      </View>
    );
  }

  return (
    <View className="flex px-4">
      <Stack.Screen options={{ title: 'Course', headerBackTitle: 'Back' }} />
      <FocusAwareStatusBar />
      <View className="mx-auto my-16 flex">
        <Text className="text-center text-xl">Welcome to</Text>
        <Text className="text-2xl font-extrabold text-primary-500">{data.course.name}</Text>
      </View>
      <Text className="pb-8">{data.course.intro} </Text>
                                  <Image
        className="h-[162px] w-[349px] px-1 pt-0"
        source={images.hw_button}
            />

             <Image
        className="h-[162px] w-[349px] px-1 pt-0"
        source={images.grades_button}
            />
    </View>
  );
}
