import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example1/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    title : { control: "text" }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const Template = (args) => <Button {...args} />;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  disabled: false,
  title: "Кнопка -"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  // title: "Кнопка -"
};

export const Large = Template.bind({});
Large.args = {
  size: "large", 
  label: "Button",
  // title: "Кнопка -"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
  // title: "Кнопка -"
};
