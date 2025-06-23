export const metadata = {
  title: 'Form',
};

export default function FormPage() {
  async function handleSubmit(event) {
    event.preventDefault();
    const fullName = event.target.full_name.value;
    try {
      await fetch('https://webhook.site/a33b551b-2c0a-4083-a500-6056f3839e7e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ full_name: fullName })
      });
      alert('Submitted');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'8px'}}>
        <label>
          Full Name:
          <input name="full_name" type="text" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
