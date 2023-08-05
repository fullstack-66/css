import { FC, ReactNode } from "react";
import * as Popover from "@radix-ui/react-popover";
import "./styles.css";

interface Props {
  trigger: ReactNode;
  children?: ReactNode;
}
const PopoverComponent: FC<Props> = ({ trigger, children }) => (
  <Popover.Root>
    <Popover.Trigger className="PopoverTrigger">{trigger}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        {children}
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverComponent;
