import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Register() {
  const onFinish = (values) => {
    console.log("form values", values);
  };
  return (
    <>
      <div className="authentication">
        <div className="authentication-form card p-2">
          <h1 Signup className="text-center">
            Sign up
          </h1>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item label="Name" name="name">
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Email Address" type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Strong password" type="password" />
            </Form.Item>
            <div className="text-center">
              <Button
                htmlType="submit"
                className="primary-button full-width-button mt-4 mb-2"
              >
                Sign up
              </Button>
              <Link to="/login" className="anchor ">
                Already have an account? Login instead.
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
