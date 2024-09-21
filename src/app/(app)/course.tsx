import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Course } from '@/api';
import { useCourses } from '@/api'
import { Card,HorizontalCard } from '@/components/card';
import { useAuth } from '@/core';
import { Button, EmptyList, FocusAwareStatusBar, Text, View } from '@/ui';

export default function Feed() {
  const dataEmail = useAuth.use.email();
    const { data, isPending, isError } = useCourses({
    //@ts-ignore
    variables: { id: dataEmail },
  });
  const renderItem = React.useCallback(
    ({ item }: { item: Course }) => <Card {...item} />,
    []
  );
  const renderHorizontalItem = React.useCallback(
    ({ item }: { item: Course }) => <HorizontalCard {...item} />,
    []
  );

  console.debug(`${JSON.stringify(useCourses())}HII`);

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
      <Text className="pt-16 text-3xl font-extrabold">My Courses!{dataEmail}</Text>
      <Text className="pt-8 text-xl">Keep Learning</Text>
       <FlashList
       className="h-52"
        horizontal={true}
        data={data}
        renderItem={renderHorizontalItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={3}
      />
      <FocusAwareStatusBar />
      <Text className="pt-4 text-xl">All Courses</Text>
      <FlashList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        estimatedItemSize={300}
      />
       <View className="flex flex-row justify-end">
 <Button label="+ Add Course" className="w-48"/>
        </View>
       

    </View>
  );
}
