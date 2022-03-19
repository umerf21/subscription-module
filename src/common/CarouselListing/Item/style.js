import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

export default StyleSheet.create({
  conatiner: {
    marginBottom: 30,
    flex: 1,
    borderRadius: 30,
    elevation: 5,
    shadowColor: Colors.mediumGrey,
    shadowOpacity: 0.9,
    shadowOffset: {width: 5, height: 5},
  },
  imageBackground: {flex: 1, justifyContent: 'flex-end'},
  subscriptionContainer: {
    backgroundColor: Colors.white,
    opacity: 0.95,
    height: 320,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    justifyContent: 'space-between',
  },
  itemSeparator: {
    borderBottomColor: Colors.paleGrey,
    borderBottomWidth: 1,
    // marginVertical: 10,
  },
  table: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 10,
    color: Colors.blackO8,
  },
  regularText: {
    fontSize: 16,
    color: Colors.mediumGrey,
  },
  boldText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.blackO8,
  },
});
