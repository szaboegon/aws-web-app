import { useForm } from "@mantine/form";
import { ProductFormData } from "../../models/productFormData";
import { IProductFormStepProps } from "../../models/props/productFormStepProps";
import { Button, Group, NumberInput, Textarea, TextInput } from "@mantine/core";

export const Contact: React.FC<IProductFormStepProps> = ({
  onNextPressed,
  defaultValues,
}) => {
  const FORM_STEP_IDX = 1;

  const form = useForm<ProductFormData>({
    initialValues: {
      location: {
        city: defaultValues.location?.city ?? "",
        country: defaultValues.location?.country ?? "",
        postalCode: defaultValues.location?.postalCode ?? "",
        streetAddress: defaultValues.location?.streetAddress ?? "",
      },
    },
    validate: {
      location: {
        country: (value) =>
          !value || value.length < 0
            ? "This field is required"
            : /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/.test(value)
            ? null
            : "Country can't contain numbers or special characters",
        city: (value) =>
          !value || value.length < 0
            ? "This field is required"
            : /^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$/.test(value)
            ? null
            : "City can't contain numbers or special characters",
        streetAddress: (value) =>
          !value || value.length < 0
            ? "This field is required"
            : /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\-.,/\s]+$/.test(value)
            ? null
            : "Invalid character in address",
        postalCode: (value) =>
          !value
            ? "This field is required"
            : /^[A-Za-z0-9\s]+$/.test(value)
            ? null
            : "Postal code can only contain letters and numbers",
      },
    },
  });

  return (
    <>
      <form
        id={`form-step${FORM_STEP_IDX}`}
        onSubmit={form.onSubmit((data) => onNextPressed(data))}
      >
        <Group>
          <TextInput
            w="49%"
            label="Country"
            {...form.getInputProps("location.country")}
          />
          <TextInput
            w="49%"
            label="Postal code"
            {...form.getInputProps("location.postalCode")}
          />
        </Group>
        <Group>
          <TextInput
            w="49%"
            label="City"
            {...form.getInputProps("location.city")}
          />
          <TextInput
            w="49%"
            label="Street address"
            {...form.getInputProps("location.streetAddress")}
          />
        </Group>
      </form>
    </>
  );
};
