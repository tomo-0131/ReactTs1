import React, { useState } from "react";

// 一つのTodoをオブジェクトとする　オブジェクトにはプロパティvalueが存在する
type Todo = {
  value: String;
};

export const App = () => {
  /**
   * text = ステートの値
   * setText = ステートの値を更新するメソッド
   * useState の引数 = ステートの初期値 (=空の文字列)
   */
  const [text, setText] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmit = () => {
    if (!text) return;
    const newTodo: Todo = {
      value: text
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        {/*
          入力中テキストの値を text ステートが
          持っているのでそれを value として表示

          onChange イベント（＝入力テキストの変化）をtext ステートに反映する
         */}
        <input type="text" value={text} onChange={(e) => handleOnChange(e)} />
        <input type="submit" value="追加" onSubmit={handleOnSubmit} />
      </form>
    </div>
  );
};
