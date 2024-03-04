import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

// As
// -컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때, 이를테면 버튼을 사용하지 않고 a태그나 Link를 사용하고 싶을 때.
// -이럴 땐 as property를 사용할 수 있다.

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// Attrs
// -styled.component를 생성할 때 속성값을 설정할 수 있게 해준다. attrs(attributes)를 이용하여 속성을 설정 가능하다.

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

const AsAndAttrs = () => {
  return (
    <Father>
      {/* As */}
      {/* <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn> */}

      {/* Attrs */}
      {/* 1. 👎 */}
      {/* <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required /> */}

      {/* 2. 👍 */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
};

export default AsAndAttrs;
