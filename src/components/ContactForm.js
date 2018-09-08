export function ContactForm() {
  return (
    <form name="contact" method="POST" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Interested in:{" "}
          <select name="training-type" multiple>
            <option value="in-person">In Person</option>
            <option value="hybrid">Hybrid</option>
            <option value="online">Online</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
