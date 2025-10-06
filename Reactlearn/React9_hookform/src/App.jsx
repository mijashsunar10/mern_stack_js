import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulate gariraxa
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }
 

  return (
   

    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register("firstName", { required: true, minLength:{value:4,message:'Min length at least 4'}, maxLength: {value:20,message:'Max length is 20'}, })}/>
        {errors.firstName && <p style={{color:'red'}}>{errors.firstName.message}</p>}
        {/* register("firstName") is a function from React Hook Form that connects your input field to the form state. */}
        {/* Without register → React doesn’t know what the user typed.
          ✅ With register → React Hook Form tracks everything for you automatically. */}

      </div>

      <br />

       <div>
        <label>Middle Name:</label>
        <input {...register("middleName")}/>

      </div>

      <br />

       <div>
        <label>Last Name:</label>
        <input {...register("lastName")}/>

      </div>
      <br />

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"} />
    </form>
  )
}

export default App
