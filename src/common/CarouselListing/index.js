import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Item from './Item';
import {Text, Dimensions, View} from 'react-native';

const CarouselListing = ({data, navigation}) => {
  const {width} = Dimensions.get('window');
  return (
    // <View style={{flex: 1, justifyContent: 'center'}}>
    <Carousel
      data={data}
      renderItem={({item}) => <Item data={item} navigation={navigation} />}
      layout={'default'}
      sliderWidth={width}
      itemWidth={width - 60}
      enableMomentum
      decelerationRate={15}
    />
    // </View>
  );
};

export default CarouselListing;
