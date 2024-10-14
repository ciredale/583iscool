import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./Build/Build/Build.loader.js",
  dataUrl: "./Build/Build/Builddata",
  frameworkUrl: "./Build/Build/Build.framework.js",
  codeUrl: "./Build/Build/Build.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          width: "100vw",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>583 is cool</h1>
      </div>
    </div>
  );
}

export default App;