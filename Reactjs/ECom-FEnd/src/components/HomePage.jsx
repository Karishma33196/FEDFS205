import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    // method format
    <div className="min-h-screen bg-blue-100">
      {/* to display all items on the browser */}
      <nav className="flex justify-between-items-center bg-pink-200 p-4 text-red">
        {/* left portion of navbar */}
        <div className="flex items-center">
          <img src="Kllogo.png" alt="KL Logo" className ="w-20 mr-3" />
          <h1 className = "text-2xl font-bold">Product Management System</h1>
        </div>

        {/* right portion of navbar */}
        <div className="fex gap-4">
          <Link to="/signin" className = "hover:underline">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
      </nav>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Dignissimos laboriosam pariatur quaerat dolores fugit beatae aut odit 
          eveniet non in, nostrum tempora eius eum suscipit nisi earum, eos 
          quibusdam esse possimus debitis numquam quam odio. Voluptatibus amet 
          adipisci delectus veniam nulla, ipsum maiores dolorem unde labore 
          dignissimos quam voluptate optio sit placeat cumque quo? Nihil 
          veritatis voluptates maxime ut ratione. Hic expedita ratione non omnis 
          totam odit illum placeat, eum alias et adipisci rem delectus incidunt 
          quae nulla eveniet cum dolores qui, sint ducimus. Sed illo, esse, 
          dolores pariatur assumenda adipisci non magnam tempore nobis eligendi 
          quod repudiandae itaque sapiente?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
