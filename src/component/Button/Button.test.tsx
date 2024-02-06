//Button.test.tsx
import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe("Button Component Tests", () => {

  // 已存在的测试：检查按钮是否禁用
  test("Check Button Disabled", () => {
    render(<Button text="Button Marbella" disabled />);
    expect(screen.getByRole('button', {name: "Button Marbella"})).toBeDisabled();
  });

  // 新测试：检查组件是否可见
  test("Check Button is Visible", () => {
    render(<Button text="Visible Button" />);
    expect(screen.getByRole('button', {name: "Visible Button"})).toBeVisible();
  });

  // 新测试：检查禁用状态下的背景颜色是否改变
  test("Check Background Color Changes When Disabled", () => {
    render(<Button text="Disabled Button" disabled />);
    const disabledButton = screen.getByRole('button', {name: "Disabled Button"});
    // 根据StyledButton组件的CSS逻辑，我们知道禁用状态下背景色应该是pink
    expect(disabledButton).toHaveStyle('background-color: pink');
  });

});
