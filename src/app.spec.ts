import { expect, test } from "@playwright/test";
import { generateInvalidPasscode } from "./utils";

test("app", async ({ page }) => {
  await page.goto("/");

  // step: first
  const passcodeLocator = page.getByText(/^[\d]{4}$/);
  await expect(passcodeLocator).toHaveCount(1);
  const passcode = (await passcodeLocator.textContent()) || "0000";
  await page.getByRole("button", { name: "OK" }).click();

  // step: try (invalid passcode)
  const invalidPasscode = generateInvalidPasscode(passcode);
  await page.getByRole("button", { name: invalidPasscode[0] }).click();
  await page.getByRole("button", { name: invalidPasscode[1] }).click();
  await page.getByRole("button", { name: invalidPasscode[2] }).click();
  await page.getByRole("button", { name: invalidPasscode[3] }).click();

  // step: finish (invalid passcode)
  await expect(page.getByText("Score 000")).toHaveCount(1);
  await expect(page.getByText(passcode, { exact: true })).toHaveCount(1);
  await expect(page.getByText(invalidPasscode, { exact: true })).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Retry" })).not.toBeDisabled();
  await expect(page.getByRole("button", { name: "Next" })).toHaveCount(1);
  await page.getByRole("button", { name: "Retry" }).click();

  // step: try (valid passcode)
  await page.getByRole("button", { name: passcode[0] }).click();
  await page.getByRole("button", { name: passcode[1] }).click();
  await page.getByRole("button", { name: passcode[2] }).click();
  await page.getByRole("button", { name: passcode[3] }).click();

  // step: finish (valid passcode)
  await expect(page.getByText("Score 001")).toHaveCount(1);
  await expect(page.getByText(passcode, { exact: true })).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Retry" })).toBeDisabled();
  await page.getByRole("button", { name: "Next" }).click();

  // step: first
  await expect(page.getByText("Score 001")).toHaveCount(1);
  await page.getByRole("button", { name: "Reset Score" }).click();
  await expect(page.getByText("Score 000")).toHaveCount(1);
  await expect(page.getByText(/^[\d]{4}$/)).toHaveCount(1);
  await expect(page.getByRole("button", { name: "OK" })).toHaveCount(1);
});
