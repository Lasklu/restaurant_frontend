import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';
export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    backgroundColor: Colors.lightGrayColor,
    borderColor: Colors.lightGrayColor,
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: Colors.lightGrayColor,
    shadowOpacity: 0,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {

    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    color: Colors.orangeColor,
    paddingHorizontal: 5,
    fontSize: 25,
  }
});

export default styles;
