import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Reminder } from '@/api'
import { useReminders } from '@/api';
import images from "@/assets/images";
import { HorizontalCard, ReminderCard} from '@/components/card';
import { Button, EmptyList, FocusAwareStatusBar, ScrollView, Text, View } from '@/ui';
import { Image } from '@/ui';
export default function Style() {
  // const dataEmail = useAuth.use.email() || "JoeSmith@gmail.com";
  const dataEmail = "JoeSmith@gmail.com"
    const { data, isPending, isError } = useReminders({
    //@ts-ignore
    variables: { id: dataEmail },
  });
  const firstData = data?.slice(0,3);
  const secondData = data?.slice(3);
  const renderItem = React.useCallback(
    ({ item }: { item: Reminder }) => <ReminderCard {...item} />,
    []
  );

  console.debug(`HI REMINDERS${JSON.stringify(useReminders())}`);
  console.debug(`${JSON.stringify(data)}`);

  if (isError) {
    return (
      <View className="mx-auto flex flex-1 justify-center">
        <Text className="text-center text-5xl"> (✿◕ ‿ ◕✿) </Text>
        <Text className="text-center text-3xl"> Oops! Sorry ;-; </Text>
        <Text className="text-center"> Error Loading data </Text>
        <Text className="text-center"> Is this a correct email? </Text>
        <Text className="pt-8 text-center"> {dataEmail} </Text>
        {/* <Text className="pt-8 text-center"> {data} </Text> */}
      </View>
    );
  }
  return (
    <ScrollView className="flex-1 p-4">
      <View className="flex flex-row justify-between pt-16 ">
        <Text className="text-3xl font-extrabold">Reminders! </Text>
        <Image
        className="h-8 w-8"
        source={images.icon}
            />
      </View>
      <FocusAwareStatusBar />
      <Text className="pt-4 text-xl">Upcoming Assignments</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={10}
      />

    </ScrollView>
  );
}
