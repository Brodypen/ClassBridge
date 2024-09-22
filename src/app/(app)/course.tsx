import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Course } from '@/api';
import { useCourses } from '@/api'
import images from "@/assets/images"
import { Card,HorizontalCard } from '@/components/card';
import { Button, EmptyList, FocusAwareStatusBar, Text, View } from '@/ui';
import { Image } from '@/ui';
export default function Feed() {
  // const dataEmail = useAuth.use.email() || "JoeSmith@gmail.com";
  const dataEmail = "JoeSmith@gmail.com"
    const { data, isPending, isError } = useCourses({
    //@ts-ignore
    variables: { id: dataEmail },
  });
  const firstData = data?.slice(0,3);
  const secondData = data?.slice(3);
  const renderItem = React.useCallback(
    ({ item }: { item: Course }) => <Card {...item} />,
    []
  );
  const renderHorizontalItem = React.useCallback(
    ({ item }: { item: Course }) => <HorizontalCard {...item} />,
    []
  );

  console.debug(`${JSON.stringify(useCourses())}`);
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
    <View className="flex-1 p-4">
      <View className="flex flex-row justify-between pt-16 ">
        <Text className="text-3xl font-extrabold">My Courses! </Text>
        <Image
        className="h-8 w-8"
        source={images.icon}
            />
      </View>
      <Text className="pt-8 text-xl">Top Courses</Text>
       <FlashList
       className="h-52"
        horizontal={true}
        data={firstData}
        renderItem={renderHorizontalItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={3}
      />
      <FocusAwareStatusBar />
      <Text className="pt-4 text-xl">All Courses</Text>
      <FlashList
        data={secondData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={10}
      />
       <View className="flex flex-row justify-end">
 <Button label="+ Add Course" className="w-48"/>
        </View>
       

    </View>
  );
}
