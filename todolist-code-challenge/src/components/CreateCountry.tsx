import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, countryState } from "../atoms";

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
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("country", {
          required: "😠 required!",
        })}
        placeholder="나라 이름"
      />
      <span>{errors?.country?.message}</span>
      <button>가자!</button>
    </form>
  );
};

export default CreateCountry;
