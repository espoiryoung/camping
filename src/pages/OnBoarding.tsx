import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import {Modal, Image, SafeAreaView, Text, TextInput,View} from 'react-native';
const OnBoarding=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            {/*TODO: 배경 색, 하단 바 색 수정, 마지막 시작하기 버튼 추가 */}
            <Onboarding
                onDone={() => console.log('done')}
                pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('@images/howToUse.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('@images/recommand.png')} />,
                    title: 'The Title',
                    subtitle: 'This is the subtitle that sumplements the title.',
                },
                {
                    backgroundColor: '#999',
                    image: <Image source={require('@images/inform.png')} />,
                    title: 'Triangle',
                    subtitle: "Beautiful, isn't it?",
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('@images/community.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                ]}
            />
            
            
        </SafeAreaView>
    )
}

export default OnBoarding;