function App(){
  return(
    <div>
      <Student name="Mehanaz"/>
      <Student name="Nasreen"/>
    </div>
  );
}
function Student(props){
  return <h2>Hello,{props.name}!</h2>;
}
export default App;