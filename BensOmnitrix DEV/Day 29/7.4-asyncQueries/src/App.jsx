import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationsAtom, totalNotificationSelector } from "../store/atoms/atom";

function App() {
  return (
    <RecoilRoot>
      <MainComponent />
    </RecoilRoot>
  )
}

function MainComponent(){
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalnNotification = useRecoilValue(totalNotificationSelector)

  return (
    <div>
      <button>Home</button>
      <button>My network {notificationsCount.network > 99 ? "99+" : notificationsCount.network}</button>
      <button>Jobs {notificationsCount.jobsCount}</button>
      <button>Messaging {notificationsCount.messageCount}</button>
      <button>Notifications {notificationsCount.notficationCount}</button>
      <button>Me {totalnNotification}</button>
    </div>
  );
}

export default App;
