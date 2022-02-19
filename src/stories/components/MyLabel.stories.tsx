import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: {
      control: "select",
      // options: ["normal"],
    },
    color: {
      control: "select",
    },
    fontColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: "normal",
  color: "secondary",
  allCaps: false,
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: "normal",
  color: "tertiary",
  allCaps: false,
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  size: "h1",
  fontColor: "red",
};
