import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../common';
import style from './style';

const PaymentMethod = ({route}) => {
  const {data} = route.params;
  const _renderDetails = (title, value, textStyle) => {
    return (
      <View style={style.table}>
        <Text style={textStyle}>{title}</Text>
        <Text style={textStyle}>{value}</Text>
      </View>
    );
  };
  //   const _renderPaymentMethods = () => {
  //       return (
  //           <AppButton title={title} />
  //       )
  //   }
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <View style={style.subscriptionContainer}>
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
        {_renderDetails('Total', `${(data?.total).toFixed(2)}`, style.boldText)}
      </View>
      <View>
        <Text>Pay Via</Text>
        <AppButton title={'Tap Payment'} onPress={() => {}} />
        <AppButton title={'Stripe Payment'} onPress={() => {}} />
      </View>
    </View>
  );
};

export default PaymentMethod;
