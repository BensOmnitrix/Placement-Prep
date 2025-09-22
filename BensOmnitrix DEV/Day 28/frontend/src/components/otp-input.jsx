import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) onOtpSubmit(combinedOtp);

    //Move to next input field if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    //Check whether the previous input box is filled
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }

    //Skipping input field which is filled
    if (value < 0 && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      //Move focus to the previous input field
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={value}
            key={index}
            onChange={(e) => {
              handleChange(index, e);
            }}
            onClick={() => {
              handleClick(index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(index, e);
            }}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
