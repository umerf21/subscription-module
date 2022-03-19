import {StyleSheet} from 'react-native';

import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    backgroundColor: Colors.primary,
  },
  title: {
    // fontFamily: Fonts.type.medium,
    fontSize: 17,
    textAlign: 'center',
    color: Colors.white,
  },
  icon: {
    marginRight: 20,
  },
});
