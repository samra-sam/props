import Card from "./Components/Cards/card"
export default function Home(){
  return(
    <div className="bg-red-800 p-3 m-32">
      <div className="bg-pink-300 flex">

     <Card heading="Name" paragraph="My name is Samra." button="Click" color="bg-black"/>
    
    <Card heading="FullName" paragraph="My Full Name is Samra Sam."button="Click Me" color="bg-blue-700"/>

    <Card heading="Age" paragraph="I am 25 years Old." button="Click More" color="bg-green-900"/>

    <Card heading="Hobby" paragraph="My hobby is Cooking." button="Click On" color="bg-purple-800"/>
     
  
    </div>
    </div>
  )
}