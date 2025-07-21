import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../../../components/Modal";
import IconButton from "../../../../../components/IconButton";
import Button from "../../../../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export default function InputModal({
  handleSave,
  activeModal,
  handleCloseModal,
  title,
  labelOne,
  labelTwo,
  schemaKeyOne,
  schemaKeyTwo,
  existingData,
}) {
  const schema = yup.object().shape({
    [schemaKeyOne]: yup.string().required("this field is required"),
    [schemaKeyTwo]: yup.string(),
  });
  const handleClearFields = () => {
    const clearFields = {
      [schemaKeyOne]: "",
      [schemaKeyTwo]: "",
    };
    reset(clearFields);
    handleSave(clearFields);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: existingData,
  });
  return (
    <Modal isOpen={activeModal}>
      <form
        onSubmit={handleSubmit(async (data) => {
          await handleSave(data);
          handleCloseModal();
        })}
      >
        <div className="flex justify-between border-b border-gray-300 p-5 pb-3 ">
          <h1 className="text-xl font-bold"> {title}</h1>
          <IconButton icon={faClose} onClick={() => handleCloseModal()} size="2xl"></IconButton>
        </div>
        <div className="p-5 pt-10 flex flex-col">
          <label className="text-lg mb-1 font-semibold">{labelOne} </label>
          <input {...register(schemaKeyOne)} type="text" className="border text-base px-2 py-1 mb-5 rounded-lg" />

          <label className="text-lg mb-1 font-semibold">{labelTwo}</label>
          <input {...register(schemaKeyTwo)} type="text" className="border text-base px-2 py-1 mb-5 rounded-lg" />
        </div>
        <div className="flex border-t border-gray-300 p-5  gap-2 justify-end">
          {existingData?.[schemaKeyOne] && (
            <Button
              type="button"
              style="delete"
              onClick={() => {
                handleClearFields();
                handleCloseModal();
              }}
              label="delete"
            ></Button>
          )}
          <Button type="button" style="cancel" onClick={() => handleCloseModal()} label="cancel"></Button>
          <Button type="submit" style="save" label="save"></Button>
        </div>
      </form>
    </Modal>
  );
}
