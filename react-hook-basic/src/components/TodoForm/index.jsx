import React, { useState } from "react";

function TodoForm(props) {
  const { onSubmit } = props;

  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    //Reset form
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
