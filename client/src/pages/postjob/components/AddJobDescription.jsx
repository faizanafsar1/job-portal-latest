import Button from "../../../components/Button";
import { Editor } from "@tinymce/tinymce-react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../components/Icon";

export default function AddJobDescription({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  return (
    <div className="space-y-4 mt-20">
      <div
        className="p-3 border border-gray-300 rounded-lg w-fit flex items-center text-primary-dark"
        onClick={prevStep}
      >
        <Icon icon={faArrowLeft} size="lg" className="text-primary-dark mx-2" />
        Back
      </div>
      <div className="p-16 mb-10 bg-primary-light/10 rounded-2xl">
        <h2 className="text-3xl font-bold">Add Job Description</h2>
      </div>
      <Editor
        apiKey="rplbdnuwz6glrerbfqra0yj2ciq38ssf9s8m4sk254ann3mv"
        initialValue={formData.jobDescription}
        init={{
          height: 400,
          menubar: false,
          plugins: ["advlist", "autolink", "lists", "link"],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic underline | bullist numlist outdent indent | " +
            "link | removeformat",
          directionality: "ltr",
          content_style: "body { direction: ltr; text-align: left; }",
        }}
        onEditorChange={(content) => updateFormData("jobDescription", content)}
      />

      <div className="w-fit ml-auto mt-10">
        <Button label="Continue" style="primary" onClick={nextStep}></Button>
      </div>
    </div>
  );
}
