import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../../../components/Modal";
import IconButton from "../../../../../components/IconButton";
import Button from "../../../../../components/Button";
import { useForm } from "react-hook-form";
export default function ResumeModal({ handleSave, activeModal, handleCloseModal }) {
  const { register, handleSubmit } = useForm();
  return (
    <Modal isOpen={activeModal}>
      <form
        onSubmit={handleSubmit(async (data) => {
          await handleSave(data);
          handleCloseModal();
        })}
      >
        <div className="flex justify-between border-b border-gray-300 p-5 pb-3 ">
          <h1 className="text-xl font-bold"> Update your resume</h1>
          <IconButton icon={faClose} onClick={() => handleCloseModal()} size="2xl"></IconButton>
        </div>
        <div className="p-5 pt-10 flex flex-col">
          <label className="text-lg mb-1 font-semibold">Select file </label>
          <input {...register("resume")} type="file" className="border text-base px-2 py-1 mb-5 rounded-lg" />
        </div>
        <div className="flex border-t border-gray-300 p-5  gap-2 justify-end">
          <Button type="button" style="cancel" onClick={() => handleCloseModal()} label="cancel"></Button>
          <Button type="submit" style="save" label="save"></Button>
        </div>
      </form>
    </Modal>
  );
}
