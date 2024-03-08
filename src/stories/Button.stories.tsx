import { Button } from "../components/button/Button"

import "../App.css"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    btnText: "Кнопка",
  },
}
