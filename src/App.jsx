import background from './assets/images/bg-desktop.svg';
import Fylo from './components/Fylo';
import Progress from './components/Progress';

const App = () => {
  return (
    <div className="font-raleway bg-veryDarkBlue w-screen h-screen flex items-center justify-center">
      <Fylo />
      <Progress />
    </div>
  );
}

export default App;