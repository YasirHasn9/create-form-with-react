import { Wrapper, Form } from "./style.form";
export const Contact = () => {
  return (
    <Wrapper>
      <Form>
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="name" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="date">Date Of Birth</label>
          <input
            id="date"
            type="date"
            name="date"
            placeholder="Data Of Birth"
          />
        </div>
      </Form>
    </Wrapper>
  );
};
