import { Switch as SwitchFromLibUi } from "@mantine/core";
import clsx from "clsx";
import { Check, X } from "lucide-react";
import type { ComponentProps } from "react";
import styles from "./switch.module.scss";

interface SwitchProps extends ComponentProps<typeof SwitchFromLibUi> {}

export const Switch = ({ checked, ...props }: SwitchProps) => (
    <SwitchFromLibUi
        checked={checked}
        thumbIcon={checked ? <Check size={12} /> : <X size={12} />}
        size="md"
        onLabel={<X size={12} color={!checked ? "accent" : "gray"} />}
        offLabel={<Check size={12} color={checked ? "accent" : "gray"} />}
        className={clsx(styles.switch, props.disabled && styles.switch_disabled)}
        styles={(_, props) => ({
            track: {
                backgroundColor: "var(--mantine-color-backgroundDark-0)",
                border: "none",
                padding: "2px"
            },
            thumb: {
                backgroundColor: props.checked
                    ? "var(--mantine-color-accent-0)"
                    : "var(--mantine-color-danger-0)",
                color: "var(--mantine-color-backgroundDark-0)",
                border: "none"
            },
            label: {
                fontSize: "14px"
            }
        })}
        {...props}
    />
);
