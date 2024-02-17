import React, { useState } from "react";
import './App.css'
function Sweet() {
  let [result1, updateresult1] = useState("");
  let [result2, updateresult2] = useState("");
  let [h1,updateh1]= useState("")
  let [m1,updatem1] = useState("")


  function teja() {
    let x =parseInt(h1)
    let y= parseInt(m1)

    let x1 = (x % 12) * 30 + y * 0.5;
    let x2 = y * 6;
    let res1 = Math.abs(x2 - x1);
    let res2 = 360 - res1;

    updateresult1(Math.min(res1,res2));
    updateresult2(Math.max(res2,res1));
    
    
  }
  return (
    <>
    <div className="heading">
      <h2 style={{textAlign:'center'}}>Clock Angle Evaluator</h2>
    </div>
    <div className="whole">
            <div className="inp">
                <label style={{fontWeight:"bold",color:'red'}}>Enter Hours  : </label>
                    <input className="inp1"
                    type="number"
                    placeholder="enter hours"
                    id="hour"
                    onChange={(e)=>{
                        updateh1(e.target.value)

                    }}
                    />

                <label style={{fontWeight:"bold", color:'red'}}>Enter Minutes  : </label>
                    <input className="inp2"
                    type="number"
                    placeholder="enter minutes"
                    id="minute"
                    onChange={(e)=>{
                        updatem1(e.target.value)
                        
                    }}
                    />
            </div>
            <div className="but">
                    <button className="butt"
                    onClick={() => {
                        teja();
                    }}
                    >
                    Click Me
                    </button>
            </div>
            <div className="result">
                <div className="gi">
                <p className="teja1">Smaller Angle is : </p>
                <p className="tejaa1">{result1}°</p>
                </div>
                <div className="gi">
                <p className="teja2">Larger Angle is : </p>
                <p className="tejaa1">{result2}°</p>
                </div>
            </div>
      </div>
    </>
  );
}
export default Sweet;

