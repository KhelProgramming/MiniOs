import './App.css';
import Taskbar from './components/Taskbar';
import Workspace from './components/Workspace';

export default function App(){
  return (
    <div className='Desktop'>
      <Workspace/>
      <Taskbar />
    </div>
  );
}
