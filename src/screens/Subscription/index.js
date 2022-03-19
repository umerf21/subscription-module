import React from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {AppButton, CarouselListing} from '../../common';
import SubscriptionPackages from '../../data/subscriptionPackages';
import {Colors, Images} from '../../theme';
import style from './style';

const Subscription = ({navigation}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <View style={style.background} />
      <Text style={style.title}>Subscription</Text>
      <CarouselListing data={SubscriptionPackages} navigation={navigation} />
    </>
  );
};

export default Subscription;
