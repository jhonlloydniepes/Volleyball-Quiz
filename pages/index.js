import Header from "@/components/Header";
import Question from "@/components/Question";
import Result from "@/components/Result";
import { Selector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";


export default function Home() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  const signOut = () =>
  Firebase.auth().signOut().then(clear);


  let Navigation = () => {
    let StatsTwo = useSelector((Stat) => {
      return Stat.ReducerTwo;
    });

  return (
    
    <>
    <Head>
      <title>VOLLEYBALL QUIZ</title>
    </Head>
    {!StatsTwo.Show ? (
      <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[90vh] ">
        <img src="title.png" alt="logo" width="1000px"></img>
        <Header />
        <Question />
      </div>
    ) : (
      
      <div className="w-[100vw] h-[50vh] sm:h-[100vh] grid place-items-center">
      <img src="title.png" alt="logo" width="800px"></img>
      <Result/>
      </div>
    )}
  </>
  );
  
}
};
