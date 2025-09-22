import { useState } from "react";
import OtpInput from "./otp-input";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput,setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
      setPhoneNumber(event.target.value);
    };
    
    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //Phone Validation
        const regex = /^[6-9]\d{9}$/g;

        if(!regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }

        //Call BE API
        //Show OTP Field

        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login successfull",otp)
    }
  return (
    <div>
      {!showOtpInput? <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter Phone Number"
        />
        <button type="submit">Submit</button>
      </form>: <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}
    </div>
  );
};

export default PhoneOtpForm;
