import {useState} from "react";
import styled from "styled-components";

export interface NewMemo {
  title: string;
  content: string;
}

// Styled Button component
const Button = styled.button`
  background-color: #3f51b5;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

// Styled Input component
const Input = styled.input`
  padding: 8px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`;

// Styled Textarea component
const Textarea = styled.textarea`
  padding: 8px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`;


function App() {
  const [newMemo, setNewMemo] = useState({
    title: "",
    content: ""
  });

  const handleNewMemo = () => {
    // Implement the logic for handling the memo here
    // For example, you can display the newMemo values in the console
    console.log(newMemo);
  };

  return (
    <>
      <Button onClick={handleNewMemo}>추가</Button>
      <Input
        value={newMemo.title}
        onChange={(e) =>
          setNewMemo((prevState) => ({
            ...prevState,
            title: e.target.value
          }))
        }
      />
      <Textarea
        value={newMemo.content}
        onChange={(e) =>
          setNewMemo((prevState) => ({
            ...prevState,
            content: e.target.value
          }))
        }
      />
    </>
  );
}

export default App;
