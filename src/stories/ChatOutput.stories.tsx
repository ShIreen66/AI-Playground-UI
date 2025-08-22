import type { Meta, StoryObj } from "@storybook/react";
import ChatOutput from "../components/ChatOutput";

const meta: Meta<typeof ChatOutput> = {
  title: "Components/ChatOutput",
  component: ChatOutput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatOutput>;

export const Default: Story = {
  args: {
    prompt: "Explain quantum computing in simple terms.",
  },
};
