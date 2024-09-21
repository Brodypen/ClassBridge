import { Link } from 'expo-router';
import React from 'react';

import type { Course } from '@/api';
import { Image, Pressable, Text, View } from '@/ui';

type Props = Course;

const images = [
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515386474292-47555758ef2e?auto=format&fit=crop&w=800&q=80',
  'https://plus.unsplash.com/premium_photo-1666815503002-5f07a44ac8fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
];

export const Card = ({ courseName, courseId }: Props) => {
  console.debug(`${courseName}HII`);
  return (
    <Link href={`/feed/${courseId}`} asChild>
      <Pressable>
        <View className="my-2 mr-2 overflow-hidden rounded-xl  border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-32 w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />
          <View className="p-2">
            <Text numberOfLines={1} className="py-3 text-2xl leading-snug text-gray-600">{courseName}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export const HorizontalCard = ({ courseName, courseId }: Props) => {
  return (
    <Link href={`/feed/${courseId}`} asChild>
      <Pressable>
        <View className="my-2 mr-2 h-48 w-48 overflow-hidden rounded-xl border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-32 w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />
          <View className="p-2">
            <Text numberOfLines={1} className="py-3 text-2xl leading-snug text-gray-600">{courseName}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
