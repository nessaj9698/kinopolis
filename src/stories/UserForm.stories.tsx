import { UserForm } from "../components/userForm/UserForm"

import "../App.css"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "UserForm",
  component: UserForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserForm>

export default meta

type Story = StoryObj<typeof meta>
export const Form: Story = {
  args: {
    title: "Регистрация",
    error: "Текст ошибки",
    submitText: "Зарегистрироваться",
  },
}
