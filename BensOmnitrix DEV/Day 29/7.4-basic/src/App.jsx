import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, meSeletor, messagingAtom, networkAtom, notificationsAtom } from "../store/atoms/atoms";

function App() {
  return (
    <RecoilRoot>
      <MainComponent />
    </RecoilRoot>
  )
}

function MainComponent(){
  const notficationCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const meCount = useRecoilValue(meSeletor); 

  return (
    <div>
      <button>Home</button>
      <button>My network {networkCount > 99 ? "99+" : networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notifications {notficationCount}</button>
      <button>Me {meCount}</button>
    </div>
  );
}

export default App;
