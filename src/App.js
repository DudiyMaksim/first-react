import logo from './logo.svg';
import './App.css';
import img1 from './700x371-6117a127ca816.webp';
import Text1 from './components/text1'
import img2 from './rivne_kost2_1.jpg';
import img3 from './unnamed.jpg';

function App() {
  const imgStyle = {
    margin: '100px',
    width: 'auto',
    height: '300px',
  };
  return (
    <>
      <Text1 />
      <img src={img1} style={imgStyle} />
      <img src={img2} style={imgStyle} />
      <img src={img3} style={imgStyle} />
    </>
  );
}

export default App;
