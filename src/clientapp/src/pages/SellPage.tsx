import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  Paper,
  Stepper,
  Notification,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { ProductFormData } from "../models/productFormData";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { Contact } from "../components/ProductForm/Contact";
import { Details } from "../components/ProductForm/Details";
import { Images } from "../components/ProductForm/Images";
import { IconX } from "@tabler/icons-react";

export const SellPage = () => {
  const totalSteps = 3;
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < totalSteps ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [formValues, setFormValues] = useState<ProductFormData>({});
  const { mutateAsync, isLoading, isError } = useCreateProduct();

  const onNextRequested = async (data: ProductFormData) => {
    setFormValues({ ...formValues, ...data });
    if (active == totalSteps - 1) {
      await mutateAsync(formValues);
      nextStep();
    } else {
      nextStep();
    }
  };

  return (
    <>
      <Flex direction="column" align={"center"} my={"xl"}>
        <Stepper w="50%" active={active} onStepClick={setActive} mt="20vh">
          <Stepper.Step label="Step 1" description="Describe the item">
            <Details
              onNextPressed={onNextRequested}
              defaultValues={formValues}
            />
          </Stepper.Step>
          <Stepper.Step label="Step 2" description="Contact information">
            <Contact
              onNextPressed={onNextRequested}
              defaultValues={formValues}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Step 3"
            description="Upload images"
            loading={isLoading}
          >
            <Images
              onNextPressed={onNextRequested}
              defaultValues={formValues}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <Text ta="center" my="24px" fw="bold" size="20px">
              Advertisement creation was successful.
            </Text>
            <Text ta="center" size="18px">
              You can close this page now.
            </Text>
          </Stepper.Completed>
        </Stepper>

        {active < totalSteps ? (
          <Group justify="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" form={`form-step${active}`}>
              {active === totalSteps - 1 ? "Submit" : "Next"}
            </Button>
          </Group>
        ) : (
          <Button mt="xl" component="a" href="/">
            Back to home page
          </Button>
        )}
        {isError && (
          <Notification
            my="20px"
            icon={<IconX />}
            color="red"
            title="Creation failed"
          >
            Something went wrong. Please try again later.
          </Notification>
        )}
      </Flex>
    </>
  );
};
