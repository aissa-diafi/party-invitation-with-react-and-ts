import React, { useState } from "react";
import "./App.css";
import { AddToList } from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Robert Greene",
      url: "https://powerseductionandwar.com/wp-content/uploads/2018/10/rg.jpg",
      age: 33,
      note: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
