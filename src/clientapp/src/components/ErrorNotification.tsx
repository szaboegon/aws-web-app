import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
interface IErrorNotificationProps {
  title: string;
  body: string;
}
export const ErrorNotification: React.FC<IErrorNotificationProps> = ({
  title,
  body,
}) => {
  return (
    <>
      <Notification my="20px" icon={<IconX />} color="red" title={title}>
        {body}
      </Notification>
    </>
  );
};
