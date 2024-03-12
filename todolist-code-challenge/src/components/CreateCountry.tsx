import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, countryState } from "../atoms";

const Form = styled.form`
  display: flex;

  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 36px;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  margin-right: 4px;
  background-color: ${(props) => props.theme.cardBgColor};
  &:focus {
    outline: 2px solid ${(props) => props.theme.accentColor};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin: 4px;
`;

const Btn = styled.button`
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
`;

interface IForm {
  country: string;
}

const CreateCountry = () => {
  const setCountry = useSetRecoilState(countryState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const handleValid = ({ country }: IForm) => {
    setCountry((prevCountry) => [
      { text: country, id: Date.now(), category },
      ...prevCountry,
    ]);
    setValue("country", "");
  };
  return (
    <>
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("country", {
            required: "😠 required! 😠",
          })}
          placeholder=" Ex) 이탈리아"
        />
        <Btn>➕</Btn>
      </Form>
      <ErrorMessage>{errors?.country?.message}</ErrorMessage>
    </>
  );
};

export default CreateCountry;
