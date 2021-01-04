import { GiWheat } from 'react-icons/gi';
import { GiMeat } from 'react-icons/gi';
import { GiFriedFish } from 'react-icons/gi';
import { GiBroccoli } from 'react-icons/gi';
import { GiOrangeSlice } from 'react-icons/gi';
import { GiSaltShaker } from 'react-icons/gi';
import { FaWineBottle } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';
import { FaCookieBite } from 'react-icons/fa';
import { ImDrawer } from 'react-icons/im';

export default function Icon(props) {
  if (props.category === 1) {
    return <GiWheat style={{ color: 'gold' }} size={40} />;
  } else if (props.category === 2) {
    return <GiMeat style={{ color: 'darkred' }} size={40} />;
  } else if (props.category === 3) {
    return <GiFriedFish style={{ color: 'cyan' }} size={40} />;
  } else if (props.category === 4) {
    return <GiBroccoli style={{ color: 'darkgreen' }} size={40} />;
  } else if (props.category === 5) {
    return <GiOrangeSlice style={{ color: 'orange' }} size={40} />;
  } else if (props.category === 6) {
    return <GiSaltShaker style={{ color: 'grey' }} size={40} />;
  } else if (props.category === 7) {
    return <FaWineBottle style={{ color: 'purple' }} size={40} />;
  } else if (props.category === 8) {
    return <MdCake style={{ color: 'lightblue' }} size={40} />;
  } else if (props.category === 9) {
    return <FaCookieBite style={{ color: 'lightbrown' }} size={40} />;
  } else if (props.category === 10) {
    return <ImDrawer style={{ color: 'darkblue' }} size={40} />;
  } else {
    return <div />;
  }

  // const icons = [
  //   { 1: <GiWheat /> },
  //   { 2: <GiMeat /> },
  //   { 3: <GiFriedFish /> },
  //   { 4: <GiCarrot /> },
  //   { 5: <GiOrangeSlice /> },
  //   { 6: <GiSaltShaker /> },
  //   { 7: <FaWineBottle /> },
  //   { 8: <MdCake /> },
  //   { 9: <FaCookieBite /> },
  //   { 10: <ImDrawer /> },
  // ];
  // console.log(props.category);

  // const correctIcon = icons.find((icon) => icon === props.category);
  // console.log(icons);
  // return <div />;
}
