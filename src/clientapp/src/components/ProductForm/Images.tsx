import { FileInput } from "@mantine/core";
import { ProductFormData } from "../../models/productFormData";
import { IProductFormStepProps } from "../../models/props/productFormStepProps";
import { useForm } from "@mantine/form";
import { IconFile } from "@tabler/icons-react";

export const Images: React.FC<IProductFormStepProps> = ({
  onNextPressed,
  defaultValues,
}) => {
  const FORM_STEP_IDX = 2;

  const form = useForm<ProductFormData>({
    initialValues: {
      images: defaultValues.images ?? [],
    },
    validate: {
      images: (value) =>
        !value || value.length <= 0
          ? "At least 1 image is required"
          : value.length > 3
          ? "A maximum of 3 images are permitted"
          : null,
    },
  });
  return (
    <>
      <form
        id={`form-step${FORM_STEP_IDX}`}
        onSubmit={form.onSubmit((data) => onNextPressed(data))}
      >
        <FileInput
          label="Upload images"
          description="Accepted formats are PNG or JPEG"
          placeholder="Click here"
          accept="image/png,image/jpeg"
          clearable
          multiple
          leftSection={<IconFile />}
          {...form.getInputProps("images")}
        />
      </form>
    </>
  );
};
