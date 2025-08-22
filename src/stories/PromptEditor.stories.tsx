import type { Meta, StoryObj } from "@storybook/react";
import PromptEditor from "../components/PromptEditor";

const meta: Meta<typeof PromptEditor> = {
  title: "Components/PromptEditor",
  component: PromptEditor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PromptEditor>;

export const Default: Story = {
  args: {
    onSubmit: (prompt: string) => alert(`Submitted prompt: ${prompt}`),
  },
};
