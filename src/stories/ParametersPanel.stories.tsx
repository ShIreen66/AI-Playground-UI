import type { Meta, StoryObj } from "@storybook/react";
import ParametersPanel from "../components/ParametersPanel";

const meta: Meta<typeof ParametersPanel> = {
  title: "Components/ParametersPanel",
  component: ParametersPanel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ParametersPanel>;

export const Default: Story = {};
