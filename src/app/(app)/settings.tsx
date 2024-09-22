/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { useColorScheme } from 'nativewind';

import { usePerson } from '@/api'
import images from '@/assets/images';
import { Item } from '@/components/settings/item';
import { ItemsContainer } from '@/components/settings/items-container';
import { LanguageItem } from '@/components/settings/language-item';
import { ThemeItem } from '@/components/settings/theme-item';
import { translate, useAuth } from '@/core';
import { FocusAwareStatusBar, ScrollView, Text, View } from '@/ui';
import { Image } from '@/ui';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const { colorScheme } = useColorScheme();
    const dataEmail = "JoeSmith@gmail.com"
    const { data, isPending, isError } = usePerson({
    //@ts-ignore
    variables: { id: dataEmail },
  });
    if (isError || data === undefined) {
    return (
               <ScrollView>
        <View className="flex-1 pt-16 ">
          <Text className="px-4 text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <View className="px-4">
            <ItemsContainer title="settings.about">
              <Item text="settings.app_name" value={Env.NAME} />
              <Item text="settings.version" value={Env.VERSION} />
            </ItemsContainer>
            <View className="my-8">
              <ItemsContainer>
                <Item text="settings.logout" onPress={signOut} />
              </ItemsContainer>
          </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1 pt-16 ">
          <Text className="px-4 text-xl font-bold">
            {translate('settings.title')}
          </Text>
                            <Image
        className="h-72 w-full px-1 pt-0"
        source={images.banner}
            />
                      <View className="p-4">
                        <View className="flex flex-row justify-between">
                          <Text className="text-3xl">
                                      {data.person.name}
                                    </Text>
                                                              <Text className="text-md">
                                      {data.person.role}
                                    </Text>
                        </View>
                                                  <Text className="text-md">
                                      Phone number: +1 {data.person.number}
                                    </Text>
                                                                                      <Text className="text-md">
                                      Email address: {data.person.email}
                                    </Text>
                      </View>
          <View className="px-4">
            <ItemsContainer title="settings.generale">
              <LanguageItem />
              <ThemeItem />
            </ItemsContainer>
            <ItemsContainer title="settings.about">
              <Item text="settings.app_name" value={Env.NAME} />
              <Item text="settings.version" value={Env.VERSION} />
            </ItemsContainer>
            <View className="my-8">
              <ItemsContainer>
                <Item text="settings.logout" onPress={signOut} />
              </ItemsContainer>
          </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
