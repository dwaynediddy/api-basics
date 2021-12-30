import Fetch from "./api/Fetch"
import FetchWithAxiosStepOne from "./api/FetchWithAxiosStepOne"
import FetchWithAxiosStepTwo from "./api/FetchWithAxiosStepTwo"
import FetchFromGraphQl from "./api/FetchFromGraphQl"

function App() {
  return (
    <div className="App">
      API basics
      {/* <Fetch /> */}
      {/* <FetchwithAxiosStepOne /> */}
      {/* <FetchWithAxiosStepTwo /> */}
      <FetchFromGraphQl />

    </div>
  );
}

export default App;
