import {
  Button,
  Group,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IProductFormStepProps } from "../../models/props/productFormStepProps";
import { ProductFormData } from "../../models/productFormData";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { Condition } from "../../models/enums/condition";

export const Details: React.FC<IProductFormStepProps> = ({
  onNextPressed,
  defaultValues,
}) => {
  const FORM_STEP_IDX = 0;

  const { data: categories } = useGetAllCategories();
  const [groupedCategories, setGroupedCategories] = useState<any>();

  const form = useForm<ProductFormData>({
    initialValues: {
      name: defaultValues.name ?? "",
      categoryName: defaultValues.categoryName ?? "",
      condition: defaultValues.condition,
      price: defaultValues.price,
      description: defaultValues.description ?? "",
    },
    validate: {
      name: (value) =>
        !!value && value?.length > 0 ? null : "This field is required",
      categoryName: (value) => (!!value ? null : "This field is required"),
      condition: (value) => (!!value ? null : "This field is required"),
      price: (value) =>
        !value
          ? "This field is required"
          : value <= 0
          ? "Value must be greater than 0"
          : null,
      description: (value) =>
        !value
          ? "This field is required"
          : value.length < 50 //TODO
          ? "Please write at least a 50 characters"
          : value.length > 1000
          ? "Description length must be a 1000 characters at most"
          : null,
    },
  });

  useEffect(() => {
    const categoriesWithParents = categories
      ?.filter((c) => !c.isTopLevel)
      .map((c) => ({
        group: c.parentCategory,
        name: c.name,
        normalizedName: c.normalizedName,
      }));

    const groupedItems = categoriesWithParents?.reduce(
      (acc: any[], currentValue: any) => {
        const existingGroup = acc.find(
          (item) => item.group === currentValue.group
        );

        if (existingGroup) {
          existingGroup.items.push({
            label: currentValue.name,
            value: currentValue.normalizedName,
          });
        } else {
          acc.push({
            group: currentValue.group,
            items: [
              {
                label: currentValue.name,
                value: currentValue.normalizedName,
              },
            ],
          });
        }

        return acc;
      },
      []
    );
    setGroupedCategories(groupedItems);
  }, [categories]);

  const toNormalText = (input: string): string => {
    const words = input.split(/(?=[A-Z])/);
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return capitalizedWords.join(" ");
  };

  return (
    <>
      <form
        id={`form-step${FORM_STEP_IDX}`}
        onSubmit={form.onSubmit((data) => onNextPressed(data))}
      >
        <Group>
          <TextInput
            w="49%"
            label="Product name"
            {...form.getInputProps("name")}
          />
          <Select
            w="49%"
            label="Choose category"
            data={groupedCategories}
            searchable
            {...form.getInputProps("categoryName")}
          />
        </Group>
        <Group>
          <Select
            label="Condition"
            w="49%"
            data={Object.values(Condition)
              .filter((v) => typeof v === "string")
              .map((s) => ({
                label: toNormalText(s),
                value: s,
              }))}
            {...form.getInputProps("condition")}
          />
          <NumberInput
            label="Price"
            w="49%"
            {...form.getInputProps("price")}
            allowNegative={false}
            suffix=" EUR"
          />
        </Group>
        <Textarea
          label="Description"
          minRows={5}
          autosize
          {...form.getInputProps("description")}
        />
      </form>
    </>
  );
};
