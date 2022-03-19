import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {AppButton} from '../../../common';
import {Images} from '../../../theme';
import style from './style';

const Item = ({data, navigation}) => {
  console.log('DATA', data);
  const _renderDetails = (title, value, textStyle) => {
    return (
      <View>
        <View style={style.table}>
          <Text style={textStyle}>{title}</Text>
          <Text style={textStyle}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={style.conatiner}>
      <ImageBackground
        style={style.imageBackground}
        imageStyle={{borderRadius: 30}}
        source={data?.image}>
        <View style={style.subscriptionContainer}>
          <Text style={style.regularText}>{data?.packageName}</Text>
          <Text style={style.title}>{data?.title}</Text>
          <View style={style.itemSeparator}></View>
          {_renderDetails(
            'Plan/Duration',
            `${data?.duration} months`,
            style.regularText,
          )}
          {_renderDetails(
            'Handling Fee',
            `${(data?.fee).toFixed(2)}`,
            style.regularText,
          )}
          {_renderDetails(
            'Total',
            `${(data?.total).toFixed(2)}`,
            style.boldText,
          )}
          <AppButton
            buttonStyle={{marginVertical: 15}}
            onPress={() => {
              navigation.navigate('PaymentMethod', {
                data: data,
              });
            }}
            title={'Subscribe'}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Item;
