import './App.css';
import Card from '../Card/Card';

import teamBuilderIcon from './assets/icon-team-builder.svg';
import calculatorIcon from './assets/icon-calculator.svg';
import karmaIcon from './assets/icon-karma.svg';
import supervisorIcon from './assets/icon-supervisor.svg';

const App = () => {
  return (
    <>
      <header>
        <div className="title">
          <h1>Reliable, efficient delivery</h1>
          <h1>Powered by Technology</h1>
        </div>

        <span>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</span>
      </header>

      <main>
        <div className="card-wrapper">
          <div className="card-container ">
            <Card color="cyan" icon={supervisorIcon}>
              <h1>Supervisor</h1>
              <span>Monitors activity to identify project roadblocks</span>
            </Card>
          </div>
          

          <div className="card-container center">
            <Card color="red" icon={teamBuilderIcon}>
              <h1>Team Builder</h1>
              <span>Scans our talent network to create the optimal team for your project</span>
            </Card>

            <Card color="orange" icon={karmaIcon}>
              <h1>Karma</h1>
              <span>Regularly evaluates our talent to ensure quality</span>
            </Card>
          </div>

          <div className="card-container ">
            <Card color="blue"  icon={calculatorIcon}>
              <h1>Calculator</h1>
              <span>Uses data from past projects to provide better delivery estimates</span>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
