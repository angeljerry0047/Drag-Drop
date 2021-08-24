import {
    Dimensions
} from 'react-native';
import Icons from './Icons'
export default {
    Deviceheight: Dimensions.get('window').height,
    Devicewidth: Dimensions.get('window').width,
    home: require('../assets/images/home.png'),
    addmeter: require('../assets/images/addmeter.png'),
    buycredit: require('../assets/images/buycredit.png'),
    userprofile: require('../assets/images/userprofile.png'),
    signbg: require('../assets/images/signbg.png'),
    logo: require('../assets/images/logo.png'),
    phone: require('../assets/images/phone-number.png'),
    name: require('../assets/images/man-user.png'),
    email: require('../assets/images/email.png'),
    collector: require('../assets/images/Collector-id.png'),
    meter: require('../assets/images/Meter-id.png'),
    avatar: require('../assets/images/avatar.png'),
    Languages: [
      {
        code: 'en',
        text: 'English',
        icon: Icons.EnFlag
      },
      {
        code: 'ar',
        text: 'Arabic',
        icon: Icons.ArFlag
      }
    ],
}
export const Mobilevalidate = (text) => {
    let reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      return false;
    } else {       
      return true;
    }
  }