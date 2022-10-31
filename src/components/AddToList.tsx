import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        placeholder="Name *"
        value={input.name}
        onChange={handleChange}
        name="name"
        required
      />
      <input
        type="number"
        className="AddToList-input"
        placeholder="Age *"
        value={input.age}
        onChange={handleChange}
        name="age"
        required
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Image URL *"
        value={input.img}
        onChange={handleChange}
        name="img"
        required
      />
      <textarea
        className="AddToList-input"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};
