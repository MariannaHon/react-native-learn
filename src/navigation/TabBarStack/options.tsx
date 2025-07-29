import {Text, View} from 'react-native';
import {HeartIcon, Label, PawIcon} from '../../assets/icons';
import {ScreenNames} from '../../constants/screens';
import {fonts} from '../../constants/fonts';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { TabBarStackType } from '../types';

const getName = (name: string) => {
    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
        return 'Улюблюені';
        case ScreenNames.HOME_PAGE:
        return 'Пухнастики';
    }
};
const getIcon = (name: string, focused: boolean) => {
    switch (name) {
        case ScreenNames.FAVORITE_PAGE:
        return <HeartIcon isFocused={focused} color={'#0B0B0B'} />;
        case ScreenNames.HOME_PAGE:
        return <PawIcon isFocused={focused} color={'#0B0B0B'} />;
    }
};
export default function getTabOptions(
    route: RouteProp<TabBarStackType, keyof TabBarStackType>): BottomTabNavigationOptions {
    return {
        tabBarStyle: {
        height: 80,
        width: '100%',
        backgroundColor: '#E5F3F5',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        },
        tabBarShowLabel: false,
        header: () => {
        return (
            <View
            style={{
                width: '100%',
                height: 60,
                padding: 10,
            }}>
            <Label />
            </View>
        );
        },
        tabBarIcon: ({focused}) => {
        return (
            <View style={{alignItems: 'center', padding:20}}>
            {getIcon(route.name, focused)}
            <Text
                    style={{
                    width: "100%",
                fontFamily: fonts.MontserratRegular,
                color: focused ? 'black' : '#838383',
                }}>
                {getName(route.name)}
            </Text>
            </View>
        );
        },
    };
}