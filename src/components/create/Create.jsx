import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  console.log(title);
  console.log(price);
  console.log(description);

  const sendDataToApi = async () => {
    await axios.post("http://127.0.0.1:8000/products/create", {
      title,
      price,
      description,
    });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Product Title</label>
          <input
            name="title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            name="price"
            placeholder="Price"
            type={"number"}
            min="0"
            step={".01"}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Form.TextArea
          name="description"
          label="Product Description"
          placeholder="Tell us more about your product..."
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button onClick={sendDataToApi} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
