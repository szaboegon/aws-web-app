import { Button, Flex, Group, Stepper } from "@mantine/core";
import { useState } from "react";

export const SellPage = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Flex direction="column" align={"center"} my={"xl"}>
        <Stepper w="60%" active={active} onStepClick={setActive}>
          <Stepper.Step
            label="Step 1"
            description="Describe the item"
          ></Stepper.Step>
          <Stepper.Step
            label="Step 1"
            description="Describe the item"
          ></Stepper.Step>
          <Stepper.Step
            label="Step 1"
            description="Upload Images"
          ></Stepper.Step>
        </Stepper>
        <Group justify="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </Flex>
    </>
  );
};
