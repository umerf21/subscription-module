import {Image, ViewPropTypes, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

const AppButton = props => {
  const {title, textStyle, icon, iconStyle, onPress, buttonStyle, disabled} =
    props;
  const renderTitle = () => {
    return <Text style={[styles.title, textStyle]}>{title}</Text>;
  };
  const renderIcon = () => {
    return <Image source={icon} style={[styles.icon, iconStyle]} />;
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      disabled={disabled}
      onPress={onPress}>
      {icon && renderIcon()}
      {title && renderTitle()}
    </TouchableOpacity>
  );
};

AppButton.PropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  container: ViewPropTypes.style,
};

export default React.memo(AppButton);
