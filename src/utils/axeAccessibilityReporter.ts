export async function axeAccessibilityReporter() {
  if (process.env.NODE_ENV === "development") {
    const axe = await require("@axe-core/react");
    const react = await require("react");
    const reactDOM = await require("react-dom");

    axe(react, reactDOM, 1000);
  }
}
