import { redirect } from "next/navigation";

const NewSiteForm = () => {
  async function submitForm(formData: FormData) {
    "use server";
    console.log(formData.values());

    redirect("/sites");
  }
  return (
    <div>
      <h2>New Site Form</h2>
      <form action={submitForm}>
        <input type="text" name="domain" placeholder="vercel.com" required />
        <br />
        <br />
        <button>Submit form</button>
      </form>
    </div>
  );
};

export default NewSiteForm;
