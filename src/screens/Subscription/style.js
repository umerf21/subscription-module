import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export default StyleSheet.create({
  background: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.secondary,
    position: 'absolute',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    margin: 30,
    color: Colors.white,
    marginTop: 50,
    fontFamily: 'Montserrat-Bold',
  },
});
