import React from "react";
import RenderPropsComponent from "./RenderPropComponent";
import { useCookies } from "react-cookie";

const SampleRenderProps = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);
    console.log(cookies);
    return (
     <RenderPropsComponent 
     render={() => {
        return (
            <div>
                <h2 onClick={(e) => setCookie("age", 22)}>
                     This is from render props
                     </h2>
            </div>
        );
     }}
      />
     );  
    };


export default SampleRenderProps;