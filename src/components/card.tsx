import { Link } from 'expo-router';
import React from 'react';

import type { Course } from '@/api';
import type { Reminder } from '@/api';
import { Image, Pressable, Text, View } from '@/ui';

type Props = Course;

const images = [
  'https://i.imgur.com/VgJm5xo.png',
  'https://i.imgur.com/OE4V1kz.png',
  'https://i.imgur.com/uMPA4jO.png',
  'https://i.imgur.com/V0h46pB.png',
  'https://i.imgur.com/dfDP4gP.png'
]

export const Card = ({ courseName, courseId, url }: Props) => {
  // console.debug(`${courseName}HII`);
  return (
    <Link href={`/feed/${courseId}`} asChild>
      <Pressable>
        <View className="my-2 mr-2 h-48 w-48 overflow-hidden rounded-xl  border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-32 w-48 overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />
          <View className="px-2">
            <Text numberOfLines={2} className="py-3 leading-snug text-gray-600">{courseName}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export const HorizontalCard = ({ courseName, courseId, url }: Props) => {
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
          <View className="px-2">
            <Text numberOfLines={2} className="py-3 leading-snug text-gray-600">{courseName}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export const ReminderCard = ({ courseName, courseId, assignmentName, dueDate }: Reminder) => {
  return (
    <Link href={`/feed/${courseId}`} asChild>
      <Pressable>
        <View className="my-2 mr-2 h-48 w-96 overflow-hidden rounded-xl border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="h-32 w-full overflow-hidden rounded-t-xl"
            contentFit="cover"
            source={{
              uri: images[Math.floor(Math.random() * images.length)],
            }}
          />
          <View className="px-2">
            <Text numberOfLines={2} className="py-3 leading-snug text-gray-600">{courseName}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
