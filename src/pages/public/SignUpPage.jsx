import { useState } from "react";
import RegistrationForm from "@/features/register/RegistrationForm";
import CCCDForm from "../../features/register/CCCDForm";

export default function SignUpPage() {
  const [cccdVerified, setCccdVerified] = useState(false);
  const [userData, setUserData] = useState(null); 

  const handleVerify = async (cccd) => {
    
      const response = await fetch(`http://localhost:8081/api/users/check?identityNumber=${cccd}`);
      let data = {}; 

      if (response.ok) {
        data = await response.json();
        console.log(data)
        setUserData(data.result); 

      } else if (response.status === 404) {
        console.log("CCCD không tìm thấy, coi như chưa đăng ký.");
        setUserData({ isRegistered: false }); 
        
      } else {
        throw new Error('Network response was not ok');
      }

      setCccdVerified(true);


  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!cccdVerified ? (
          <CCCDForm
            onVerify={handleVerify}
          />
        ) : (
          <RegistrationForm
            isRegistered={userData?.isRegistered || false}
            userData={userData}
            onBack={() => {
              setCccdVerified(false);
              setUserData(null); 
            }}
          />
        )}
      </div>
    </main>
  );
}