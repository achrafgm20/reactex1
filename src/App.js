import "./App.css";
import MainGoal from "./components/MainGoal";




export default function App() {
 return(
  <div id="app">
    <h1>Time to Practice!</h1>
      <p>
        Build a  <span id="mg">&lt;maingoal&gt;</span>  component and insert it below this text.
      </p>
      <p>Your <span id="mg">&lt;maingoal&gt;</span> component should simply output some text that describes your main goal <span id="mg">(e.g, 'My main goal: Learn React in great detail").</span>
      </p>
      <p >Important : you custom component must contain the next 'my main goal'.</p>
      <p>Also important : forthe automatic checks to succeed , you must export your custom comonent function ! Not as ad default but simply by adding the export keyword in front of your function (e.g, export function YOUR_COMPONENT_NAME).</p>
     <MainGoal />
    </div>
 )
}