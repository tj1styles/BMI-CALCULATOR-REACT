import { React, useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import man_eating from "../assets/images/image-man-eating.webp";
import curved_lineRight from "../assets/images/pattern-curved-line-right.svg";
import curved_lineLeft from "../assets/images/pattern-curved-line-left.svg";
import eating_logo from "../assets/images/icon-eating.svg";
import exercise_logo from "../assets/images/icon-exercise.svg";
import sleep_logo from "../assets/images/icon-sleep.svg";
import gender_logo from "../assets/images/icon-gender.svg";
import race_logo from "../assets/images/icon-race.svg";
import age_logo from "../assets/images/icon-age.svg";
import muscle_logo from "../assets/images/icon-muscle.svg";
import pregnancy_logo from "../assets/images/icon-pregnancy.svg";

// import Loader from "../components/Loader/Loader";

const HomeScreen = () => {
  const [isMetric, setIsMetric] = useState(true);
  const [cmHeight, setCmHeight] = useState();
  const [kgWeight, setKgWeight] = useState();
  const [metricTotal, setMetricTotal] = useState();
  const [imperialTotal, setImperialTotal] = useState();
  const [convertedFeetToInch, setConvertedFeetToInch] = useState();
  const [convertedStoneToPound, setConvertedStoneToPound] = useState();
  const [inchHeight, setInchHeight] = useState();
  const [poundWeight, setPoundWeight] = useState();
  const [stoneWeight, setStoneWeight] = useState();
  const [feetHeight, setFeetHeight] = useState();

  useEffect(() => {
    if (cmHeight && kgWeight) {
      const total = (kgWeight / cmHeight / cmHeight) * 10000;
      setMetricTotal(total);
    }
    console.log(metricTotal);
  }, [cmHeight, kgWeight, metricTotal]);

  useEffect(() => {
    if (feetHeight && stoneWeight) {
      const inchTotal = feetHeight * 12;
      const poundTotal = stoneWeight * 14;
      setConvertedFeetToInch(inchTotal);
      setConvertedStoneToPound(poundTotal);
      setInchHeight(convertedFeetToInch);
      setPoundWeight(convertedStoneToPound);
    }
  }, [convertedFeetToInch, convertedStoneToPound, feetHeight, stoneWeight]);

  useEffect(() => {
    const total = (poundWeight / inchHeight ** 2) * 730;
    setImperialTotal(total);
  }, [inchHeight, poundWeight]);
  console.log(convertedFeetToInch);
  console.log(convertedStoneToPound);
  console.log(inchHeight);
  console.log(poundWeight);
  console.log(imperialTotal);

  return (
    <>

      <section className="relative w-full">
        
        {/* First Section */}

        <div className="w-[100%] flex flex-col items-center   lg:flex-row flex-wrap lg:h-[80vh] relative">
          <div className=" md:w-[100%]  lg:w-[65vw] h-full bg-[rgb(225,241,254)] rounded-b-[2.3vw]    lg:ml-[0.9vw] lg:pl-[10vw] lg:pr-[22vw] space-y-[5%] lg:space-y-[4.3vw] py-[4vw] sm:pb-[40%] md:pb-[25%] lg:pb-[16%] items-center lg:items-start flex flex-col">
            <header className="w-[50%] text-center lg:w-full flex flex-wrap flex-row lg:justify-start  justify-center  ">
              <img src={logo} className="w-[15%] lg:w-[3vw]" alt="" />
            </header>
            <div className="w-[50%] text-center lg:text-left lg:w-full flex flex-row flex-wrap space-y-[7%] lg:space-y-[0.3vw]">
              <h1 className="text-[30px] md:text-center lg:text-left md:text-[4.1vw] font-[600]">
                Body Mass Index Calculator
              </h1>
              <p className="text-[10px] md:text-center lg:text-left md:text-[1.2vw] font-[400]">
                Better understand your weight in relation to your height using
                our body mass index (BMI) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being
              </p>
            </div>
          </div>

          <div
            className={
              "sm:w-[300px] md:w-[380px] lg:w-[37vw] absolute top-[70%] lg:top-[2.8vw] lg:right-[13vw] bg-white shadow-shadowColor shadow-3xl lg:rounded-[0.6vw] lg:px-[1.7vw] space-y-[1.4vw] overflow-hidden py-[10px] px-[20px] lg:py-[2vw] rounded-[10px]"
            }
          >
            <div className="w-full flex flex-row flex-wrap font-[600] text-[18px] lg:text-[1.5vw]">
              <h2>Enter your details below</h2>
            </div>

            <div className="w-full flex flex-row flex-wrap">
              <div className="w-[30%] flex flex-row flex-wrap items-center space-x-[1.8vw]">
                <input
                  type="radio"
                  className="radio checked:bg-[rgb(48,98,237)] checked:shadow-[rgb(229,231,253)] checked:shadow-inputSm appearance-none w-[14px] h-[14px] lg:w-[1.7vw] lg:h-[1.7vw] rounded-full   bg-none border-[rgb(230,232,231)] checked:w-[14px] checked:h-[14px]  lg:checked:w-[1.3vw] lg:checked:h-[1.3vw] border-2"
                  checked={isMetric}
                  onChange={() => setIsMetric(!isMetric)}
                  name={"why"}
                />

                <span className="font-[600] text-[12px] lg:text-[1.1vw]">
                  Metric
                </span>
              </div>

              <div className="w-[30%] flex flex-row flex-wrap items-center space-x-[1.8vw] ml-auto">
                <input
                  type="radio"
                  className="radio checked:bg-[rgb(48,98,237)] checked:shadow-[rgb(229,231,253)] checked:shadow-inputSm appearance-none w-[14px] h-[14px] lg:w-[1.7vw] lg:h-[1.7vw] rounded-full   bg-none border-[rgb(230,232,231)] checked:w-[14px] checked:h-[14px]  lg:checked:w-[1.3vw] lg:checked:h-[1.3vw] border-2"
                  // checked={''}
                  checked={!isMetric}
                  onChange={() => setIsMetric(!isMetric)}
                  name="why"
                />

                <span className="font-[600] text-[12px] lg:text-[1.1vw]">
                  Imperial
                </span>
              </div>
            </div>

            {/* Metric Measurement */}

            <div
              className={
                isMetric
                  ? "w-full flex flex-col flex-wrap space-y-[7%]  md:space-y-[1.94vw] py-[2.8vw]"
                  : "hidden"
              }
            >
              <div className="w-full md:items-center  md:justify-center flex flex-row sm:space-y-[6%] flex-wrap md:space-x-[1.9vw] ">
                <div className="sm:w-full md:w-[45%]  flex flex-col flex-wrap text-[rgb(165,172,178)] ">
                  <span className="text-[9px] lg:text-[1.01vw]">Height</span>

                  <div className="w-full lg:h-[10vh] flex flex-row flex-wrap border-[rgb(238,238,238)] border-[0.2vw]   rounded-[0.6vw] items-center justify-between px-[1.2vw] py-[5px]">
                    <input
                      type="number"
                      value={cmHeight}
                      onChange={(e) => setCmHeight(e.target.value)}
                      className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap "
                      placeholder="0"
                    />
                    <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]">
                      cm
                    </span>
                  </div>
                </div>
                <div className="sm:w-full md:w-[45%] flex flex-col flex-wrap text-[rgb(165,172,178)] ">
                  <span className="text-[9px] lg:text-[1.01vw]">Weight</span>

                  <div className="w-full lg:h-[10vh] flex flex-row flex-wrap border-[rgb(238,238,238)] border-[0.2vw]   rounded-[0.6vw] items-center justify-between px-[1.2vw] py-[5px]">
                    <input
                      type="number"
                      onChange={(e) => setKgWeight(e.target.value)}
                      value={kgWeight}
                      className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap  "
                      placeholder="0"
                    />
                    <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]">
                      kg
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full pl-[40px] bg-[rgb(78,116,253)] lg:h-[13vh]  lg:rounded-r-[5vw] rounded-[8px] py-[20px] px-[20px] lg:py-[0px] lg:px-[0px] lg:rounded-l-[1vw] flex  flex-col flex-wrap text-white justify-center  lg:pl-[1.8vw]">
                <h1 className="text-[18px] lg:text-[1.5vw] font-[500]">
                  {kgWeight && cmHeight !== 0
                    ? "Your BMI Result is"
                    : "Welcome!"}
                </h1>
                <p className="text-[10px] lg:text-[0.9vw]">
                  {metricTotal > 1 &&
                  metricTotal < 18.5 &&
                  kgWeight > 0 &&
                  cmHeight > 0
                    ? `Your BMI is ${metricTotal.toFixed(
                        2
                      )}, You are underweight`
                    : metricTotal > 18.5 &&
                      metricTotal < 25 &&
                      kgWeight > 0 &&
                      cmHeight > 0
                    ? `Your BMI is ${metricTotal.toFixed(2)}, You are healthy`
                    : metricTotal > 25 &&
                      metricTotal < 30 &&
                      kgWeight > 0 &&
                      cmHeight > 0
                    ? `Your BMI is ${metricTotal.toFixed(
                        2
                      )}, you are overweight`
                    : metricTotal > 30 && kgWeight > 0 && cmHeight > 0
                    ? `Your BMI is ${metricTotal.toFixed(2)}, you are obese`
                    : "Enter your height and weight and you'll see your BMI result here "}
                </p>
              </div>
            </div>

            {/* Imperial Measurement */}

            <div
              className={
                isMetric
                  ? "hidden"
                  : "w-full flex flex-col flex-wrap space-y-[10px] lg:space-y-[1.94vw] py-[2.8vw]"
              }
            >
              <div className="w-full flex flex-row flex-wrap space-y-[15px]  lg:space-y-[1.04vw] ">
                <div className="w-full flex flex-row items-center flex-wrap text-[rgb(165,172,178)] space-x-[20px] lg:space-x-[1.9vw]">
                  <div className="w-[45%] flex flex-col flex-wrap text-[rgb(165,172,178)] ">
                    <span className="text-[9px] lg:text-[1.01vw]">Height</span>

                    <div className="w-full py-[5px] lg:py-[0px] lg:h-[10vh] flex flex-row flex-wrap border-[rgb(238,238,238)] border-[0.2vw]   rounded-[0.6vw] justify-between  items-center px-[1.2vw]">
                      <input
                        type="number"
                        value={feetHeight}
                        onChange={(e) => setFeetHeight(e.target.value)}
                        className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap  "
                        placeholder="0"
                      />
                      <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]">
                        ft
                      </span>
                    </div>
                  </div>

                  <div className="w-[45%] flex flex-col flex-wrap text-[rgb(165,172,178)] mt-[5%] lg:mt-[1.6vw] ">
                    <div className="w-full py-[5px] lg:py-[0px] lg:h-[10vh] flex flex-row flex-wrap border-[rgb(238,238,238)] px-[1.2vw] border-[0.2vw]   rounded-[0.6vw] justify-between items-center">
                      <input
                        type="number"
                        value={convertedFeetToInch}
                        className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap  "
                        readOnly={true}
                        placeholder={
                          convertedFeetToInch ? `${convertedFeetToInch}` : "0"
                        }
                      />
                      <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]">
                        in
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row items-center flex-wrap text-[rgb(165,172,178)] space-x-[20px] lg:space-x-[1.9vw]">
                  <div className="w-[45%] flex flex-col flex-wrap ">
                    <span className="text-[9px] lg:text-[1.01vw]">Weight</span>

                    <div className="w-full py-[5px] lg:py-[0px] lg:h-[10vh] flex flex-row flex-wrap border-[rgb(238,238,238)] border-[0.2vw]   rounded-[0.6vw] justify-between px-[1.2vw]  items-center">
                      <input
                        type="number"
                        value={stoneWeight}
                        onChange={(e) => setStoneWeight(e.target.value)}
                        className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap  "
                        placeholder="0"
                      />
                      <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]">
                        st
                      </span>
                    </div>
                  </div>

                  <div className="w-[45%] flex flex-col flex-wrap text-[rgb(165,172,178)] mt-[5%] lg:mt-[1.6vw] ">
                    <div className="w-full  py-[5px] lg:py-[0px] lg:h-[10vh] flex flex-row flex-wrap border- justify-between [rgb(238,238,238)] border-[0.2vw] px-[1.2vw]   rounded-[0.6vw] items-center">
                      <input
                        type="number"
                        value={convertedStoneToPound}
                        className="w-[70%] focus:outline-none  lg:text-[1.7vw] appearance-none number lg:placeholder:text-[1.7vw] placeholder:text-[12px] placeholder:text-[rgb(206,206,208)] h-full items-center flex flex-row flex-wrap  "
                        readOnly={true}
                        placeholder={
                          convertedStoneToPound
                            ? `${convertedStoneToPound}`
                            : "0"
                        }
                      />
                      <span className="text-[12px] lg:text-[1.7vw] text-[rgb(62,96,217)] font-[600]]">
                        lbs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pl-[40px] bg-[rgb(78,116,253)] lg:h-[13vh]  lg:rounded-r-[5vw] rounded-[8px] py-[20px] px-[20px] lg:py-[0px] lg:px-[0px] lg:rounded-l-[1vw] flex  flex-col flex-wrap text-white justify-center  lg:pl-[1.8vw]">
                <h1 className="text-[18px] lg:text-[1.5vw] font-[500]">
                  {kgWeight && cmHeight !== 0
                    ? "Your BMI Result is"
                    : "Welcome!"}
                </h1>
                <p className="text-[10px] lg:text-[0.9vw]">
                  {imperialTotal > 1 &&
                  imperialTotal < 18.5 &&
                  poundWeight > 0 &&
                  inchHeight > 0
                    ? `Your BMI is ${imperialTotal.toFixed(
                        2
                      )}, You are underweight`
                    : imperialTotal > 18.5 &&
                      imperialTotal < 25 &&
                      poundWeight > 0 &&
                      inchHeight
                    ? `Your BMI is ${metricTotal.toFixed(2)}, You are healthy`
                    : imperialTotal > 25 &&
                      imperialTotal < 30 &&
                      poundWeight > 0 &&
                      inchHeight > 0
                    ? `Your BMI is ${imperialTotal.toFixed(
                        2
                      )}, you are overweight`
                    : imperialTotal > 30 && poundWeight > 0 && inchHeight > 0
                    ? `Your BMI is ${imperialTotal.toFixed(2)}, you are obese`
                    : "Enter your height and weight and you'll see your BMI result here "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div
          className={
            isMetric
              ? "w-[100%]  flex sm:flex-col md:flex-row flex-wrap  items-center justify-center sm:pt-[52%] md:pt-[30%] lg:pt-[0%] md:space-x-[8vw] lg:h-[80vh] "
              : "w-[100%]  flex sm:flex-col md:flex-row flex-wrap  items-center justify-center sm:pt-[60%] md:pt-[40%] lg:pt-[0%] md:space-x-[8vw] lg:h-[80vh]"
          }
        >
          <div className="hidden lg:block w-[30vw] absolute h-[20vh] right-[10vw] top-[40vw] ">
            <img src={curved_lineLeft} className="w-full h-full" alt="" />
          </div>

          <div className="sm:w-[80%] md:w-[40%] lg:w-[30vw] flex flex-row flex-wrap">
            <img src={man_eating} className="w-full" alt="" />
          </div>
          <div className="w-[80%] md:w-[40%] lg:w-[32vw] flex flex-col flex-wrap lg:items-center lg:justify-center h-full  pt-[5vw] space-y-[1.3vw] ">
            <h3 className="sm:text-[26px] md:text-[2.5vw] font-[600]">
              What your BMI result means
            </h3>
            <p className="sm:text-[14px] md:text-[1.2vw] text-[rgb(148,154,163)]">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight'.
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and
              vegetables. Additionally, strive for regular physical activity,
              ideally about 30 minutes daily for five days a week.
            </p>
          </div>
        </div>

        {/* Third Section */}

        <div className="w-[100%]  flex flex-row flex-wrap items-center  justify-center py-[5%] ">
          <div className="w-full lg:w-[95vw] lg:rounded-[2.2vw] sm:pl-[7%]  lg:h-[60vh] bg-[rgb(225,241,254)] flex    flex-col lg:flex-row flex-wrap sm:items-end  md:items-center   lg:justify-evenly space-y-[3%] py-[3%] lg:py-[0px] lg:space-y-[0px] ">
            <div className="sm:w-full md:w-[80%]  lg:w-[25vw] flex sm:flex-col md:flex-row lg:flex-col flex-wrap md:items-center sm:justify-center lg:items-start md:space-x-[2%] lg:space-x-[0%]  md:justify-center h-full space-y-[1.6vw]">
              <div className="sm:w-[10%] md:w-[4%] lg:w-[4vw]">
                <img src={eating_logo} className="w-full" alt="" />
              </div>
              <div className="space-y-[1.3vw] sm:w-[75%] md:w-[70%] lg:w-full">
                <h3 className="sm:text-[18px] md:text-[1.7vw] font-[600]">
                  Healthy eating
                </h3>
                <p className="sm:text-[12px] md:text-[1.2vw]">
                  Healthy eating promotes weight control, disease prevention,
                  better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-[80%] w-[80%]  lg:w-[25vw] flex sm:flex-col md:flex-row lg:flex-col flex-wrap md:items-center lg:items-start md:space-x-[2%] lg:space-x-[0%]  md:justify-center h-full space-y-[1.6vw]">
              <div className="sm:w-[10%] md:w-[4%] lg:w-[4vw]">
                <img src={exercise_logo} className="w-full" alt="" />
              </div>
              <div className="space-y-[1.3vw] sm:w-[75%] md:w-[70%] lg:w-full">
                <h3 className="sm:text-[18px] md:text-[1.7vw] font-[600]">
                  Regular exercise
                </h3>
                <p className="sm:text-[12px] md:text-[1.2vw]">
                  Exercise improves fitness, aids weight control, elevates mood,
                  and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-[80%]  lg:w-[25vw] flex sm:flex-col md:flex-row lg:flex-col flex-wrap md:items-center lg:items-start md:space-x-[2%] lg:space-x-[0%]  md:justify-center h-full space-y-[1.6vw]">
              <div className="sm:w-[10%] md:w-[4%] lg:w-[4vw]">
                <img src={sleep_logo} className="w-full" alt="" />
              </div>
              <div className="space-y-[1.3vw] sm:w-[75%] md:w-[70%] lg:w-full">
                <h3 className="sm:text-[18px] md:text-[1.7vw] font-[600]">
                  Adequate sleep
                </h3>
                <p className="sm:text-[12px] md:text-[1.2vw]">
                  Sleep enhances mental clarity, emotional stability, and
                  physical wellness, promoting overall restoration and
                  rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section */}

        <div className="w-[100%] lg:h-[130vh]  flex flex-wrap relative justify-center pt-[4.2vw] space-x-[4%] lg:space-x-[0px] space-y-[2%] lg:space-y-[0px]">
          <div className="w-[70%] text-center lg:text-left lg:w-[39vw] flex flex-wrap flex-col">
            <h3 className="text-[20px] md:text-[2.5vw] font-[600]">
              Limitations of BMI
            </h3>
            <p className="text-[15px] md:text-[1.2vw] text-[rgb(148,154,163)]">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="hidden lg:block w-[30vw] absolute h-[17vh] left-[10vw] top-[17vw] ">
            <img src={curved_lineRight} className="w-full h-full" alt="" />
          </div>

          <div className="w-[70%] md:w-[37%] py-[3%] lg:py-[0px] lg:w-[27vw]  bg-white  shadow-shadowColor shadow-3xl rounded-[1.5vw] flex flex-wrap lg:h-[32vh] flex-col px-[6%] md:px-[2.2vw] space-y-[6%] md:space-y-[1vw] h-auto lg:justify-center">
            <div className="w-full flex flex-row items-center flex-wrap space-x-[6%] md:space-x-[1.1vw]">
              <img src={gender_logo} className="w-[8%] md:w-[2.1vw]" alt="" />
              <span className="text-[16px] md:text-[1.3vw] font-[600]">
                Gender
              </span>
            </div>
            <p className="text-[14px] lg:text-[1.2vw] text-[rgb(148,154,163)]">
              The development and body fat composition of girls and boys may
              vary with age. Consequently, a child's age and gender are
              considered when evaluating their BMI.
            </p>
          </div>

          <div className="w-[70%] md:w-[37%] py-[3%] lg:py-[0px] lg:w-[27vw] lg:absolute lg:top-[26vw]  bg-white  shadow-shadowColor shadow-3xl rounded-[1.5vw] flex flex-wrap lg:h-[23vh] flex-col px-[6%] md:px-[2.2vw] space-y-[6%] md:space-y-[1vw] lg:justify-center">
            <div className="w-full flex flex-row items-center flex-wrap space-x-[6%] md:space-x-[1.1vw]">
              <img src={age_logo} className="w-[8%] md:w-[2.1vw]" alt="" />
              <span className="text-[16px] md:text-[1.3vw] font-[600]">
                Age
              </span>
            </div>
            <p className="text-[14px] lg:text-[1.2vw] text-[rgb(148,154,163)]">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content
            </p>
          </div>

          <div className="w-[70%] md:w-[37%] py-[3%] lg:py-[0px] lg:w-[27vw] lg:absolute lg:top-[26vw] lg:right-[5vw]  bg-white  shadow-shadowColor shadow-3xl rounded-[1.5vw] flex flex-wrap lg:h-[23vh] flex-col px-[6%] md:px-[2.2vw]  space-y-[6%] md:space-y-[1vw] h-auto lg:justify-center">
            <div className="w-full flex flex-row items-center flex-wrap space-x-[6%] md:space-x-[1.1vw]">
              <img src={muscle_logo} className="w-[8%] md:w-[2.1vw]" alt="" />
              <span className="text-[16px] md:text-[1.3vw] font-[600]">
                Muscle
              </span>
            </div>
            <p className="text-[14px] lg:text-[1.2vw] text-[rgb(148,154,163)]">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>

          <div className="w-[70%] md:w-[37%] py-[3%] lg:py-[0px] lg:w-[27vw] lg:absolute lg:top-[43vw] lg:left-[20vw] bg-white  shadow-shadowColor shadow-3xl rounded-[1.5vw] flex flex-wrap lg:h-[32vh] flex-col px-[6%] md:px-[2.2vw]  space-y-[6%] md:space-y-[1vw] h-auto lg:justify-center">
            <div className="w-full flex flex-row items-center flex-wrap space-x-[6%] md:space-x-[1.1vw]">
              <img
                src={pregnancy_logo}
                className="w-[8%] md:w-[2.1vw]"
                alt=""
              />
              <span className="text-[16px] md:text-[1.3vw] font-[600]">
                Pregnancy
              </span>
            </div>
            <p className="text-[14px] lg:text-[1.2vw] text-[rgb(148,154,163)]">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimize health risks for both mother and child.{" "}
            </p>
          </div>

          <div className="w-[70%] md:w-[37%] py-[3%] lg:py-[0px] lg:w-[27vw] lg:absolute lg:top-[43vw] lg:left-[50vw]  bg-white  shadow-shadowColor shadow-3xl rounded-[1.5vw] flex flex-wrap lg:h-[32vh] flex-col px-[6%] md:px-[2.2vw]  space-y-[6%] md:space-y-[1vw] h-auto lg:justify-center">
            <div className="w-full flex flex-row items-center flex-wrap space-x-[6%] md:space-x-[1.1vw]">
              <img src={race_logo} className="w-[8%] md:w-[2.1vw]" alt="" />
              <span className="text-[16px] md:text-[1.3vw] font-[600]">
                Race
              </span>
            </div>
            <p className="text-[14px] lg:text-[1.2vw] text-[rgb(148,154,163)]">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
