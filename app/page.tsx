import "./pagestyle.css";

import { MyMapComponent } from "./MyMapbox";

const MyApp = function () {
  // return <div className="header"> </div>;

  let myCondition = true;

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Hello, Next.js!</h1>
        </div>
        <div className="container">
          <div className="sidebar">
            <>
              <h2>Sidebar content</h2>
            </>
          </div>

          <div className="content">
            <h2>Main Content</h2>
            <MyMapComponent />
          </div>
        </div>
        <div className="footer">
          <h3>The footer is here!</h3>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <>
      {/* <h1>Hello, Next.js!</h1> */}
      <MyApp />
    </>
  );
}
