import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import images from '@/assets/images';
import { Card } from '@/components/card';
import { EmptyList, FocusAwareStatusBar, Text, View } from '@/ui';
import { Image } from '@/ui';
export default function Feed() {

  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
              <View className="flex-1 pt-16">
          <Text className="px-4 pb-4 text-center text-xl font-bold">
            About us!
          </Text>
       <Image
        className="h-72 w-full px-1 pt-0"
        source={images.pirate}
            />
            </View>
            </ScrollView>

    </>
  );
}
