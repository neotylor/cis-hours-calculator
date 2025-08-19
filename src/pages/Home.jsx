import TestForm from "../components/TestForm";

function Home({ showAlert, mode }) {
  
  return (
    <TestForm 
      showAlert={showAlert} 
      paddingVal="my-3" 
      mode={mode} 
      title="Enter The text to Analyze below" 
      title2="Calculate Hours"
      link={{url: "https://neotylor.github.io/erp-time-track/#/calculator", text: "Click here to see the ERP Timesheet Calculator"}} 
    />
  );
}

export default Home;
