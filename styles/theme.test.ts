import {
  theme,
  color,
  space,
  breakpoint,
  zIndex,
  textFont,
  displayFont,
} from "./theme";

describe("color utility function", () => {
  test("gets color from theme", () => {
    const gray100 = color("gray", 100)({ theme });
    expect(gray100).toBe("#f2f4f7");
  });
});

describe("space utility function", () => {
  test("gets single space from theme", () => {
    const space2 = space(2)({ theme });
    expect(space2).toBe("0.5rem");
  });

  test("gets vertical and horizontal space from theme", () => {
    const space2 = space(2, 3)({ theme });
    expect(space2).toBe("0.5rem 0.75rem");
  });

  test(" gets top, horizontal, and bottom space from theme", () => {
    const space2 = space(2, 3, 4)({ theme });
    expect(space2).toBe("0.5rem 0.75rem 1rem");
  });

  test(" gets top, left, bottom, and right from theme", () => {
    const space2 = space(2, 3, 4, 5)({ theme });
    expect(space2).toBe("0.5rem 0.75rem 1rem 1.25rem");
  });
});

describe("breakpoint utility function", () => {
  test("gets breakpoint from theme", () => {
    const breakpointDesktop = breakpoint("desktop")({ theme });
    expect(breakpointDesktop).toBe("64em");
  });
});

describe("zIndex utility function", () => {
  test("gets z-index from theme", () => {
    const zIndexHeader = zIndex("header")({ theme });
    expect(zIndexHeader).toBe(1000);
  });
});

describe("font utility functions", () => {
  test("textFont gets text font from theme", () => {
    const fontSmMd = textFont("sm", "medium")({ theme });
    expect(fontSmMd).toContain("font-size: 0.875rem;");
    expect(fontSmMd).toContain("line-height: 1.25rem;");
    expect(fontSmMd).toContain("font-weight: 500;");
  });

  test("displayFont gets font from theme", () => {
    const displayFontSmMd = displayFont("sm", "medium")({ theme });
    expect(displayFontSmMd).toContain("font-size: 1.875rem;");
    expect(displayFontSmMd).toContain("line-height: 2.375rem;");
    expect(displayFontSmMd).toContain("font-weight: 500;");
  });
});

export {};
